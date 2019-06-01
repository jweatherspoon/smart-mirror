import TimeService from '../../Code/Services/TimeService';

describe("TimeService test suite.", () => {
    let service : TimeService;

    beforeEach(() => {
        service = new TimeService();
    })

    test('Correctly returns the current system time', () => {
        service.start(10000, true);
        let now = new Date();
        expect(CompareDates(now, service.getData())).toBe(true);
    });

    test("Does not set current time if not started immediately.", () => {
        service.start(10000, false);
        let now = new Date();
        expect(CompareDates(now, service.getData())).toBe(false);
    });

    test("Calling update sets the current time.", () => {
        service.start(10000, false);
        let now = new Date();
        expect(CompareDates(now, service.getData())).toBe(false);

        service.update();
        now = new Date();
        expect(CompareDates(now, service.getData())).toBe(true);
    });
});

const CompareDates = (expected : Date, actual : Date) : boolean => {
    return (expected.getHours() == actual.getHours()) &&
           (expected.getMinutes() == actual.getMinutes()) &&
           (expected.getSeconds() == actual.getSeconds());
}
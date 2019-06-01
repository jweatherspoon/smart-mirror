import TimeService from '../../Code/Services/TimeService';

describe("TimeService test suite.", () => {
    let service : TimeService;
    let now : Date;

    beforeEach(() => {
        service = new TimeService();
    })

    test('Correctly returns the current system time', () => {
        service.start(10000, true);
        now = new Date();
        expect(CompareDates(now, service.data)).toBe(true);
    });

    test("Does not set current time if not started immediately.", () => {
        service.start(10000, false);
        now = new Date();
        expect(CompareDates(now, service.data)).toBe(false);
    });

    test("Calling update sets the current time.", () => {
        service.start(10000, false);
        now = new Date();
        expect(CompareDates(now, service.data)).toBe(false);

        service.update();
        now = new Date();
        expect(CompareDates(now, service.data)).toBe(true);
    });

    test("Callback runs on update if set.", () => {
        let isCalled : boolean = false;
        service.callback = (data : Date) => {
            isCalled = true;
            now = data;
        }

        expect(CompareDates(now, service.data)).toBe(false);

        service.start(1000, true);

        expect(isCalled).toBe(true);
        expect(CompareDates(now, service.data)).toBe(true);
    });
});

const CompareDates = (expected : Date, actual : Date) : boolean => {
    return (expected.getHours() == actual.getHours()) &&
           (expected.getMinutes() == actual.getMinutes()) &&
           (expected.getSeconds() == actual.getSeconds());
}
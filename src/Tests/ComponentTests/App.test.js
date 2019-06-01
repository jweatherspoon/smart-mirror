import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../Code/Components/Views/App';

describe("App view tests.", () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test("Test that fails.", () => expect(false).toBe(true));
});

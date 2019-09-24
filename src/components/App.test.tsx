import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {act} from "react-dom/test-utils";

let container: HTMLElement | null = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting, if it's not null
    if (container != null) {
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
    }
    container = null;
});

it('renders without crashing', () => {
    act(() => {
        ReactDOM.render(<App />, container);
    });
});

it("renders board properly", () => {
    act(() => {
        ReactDOM.render(<App />, container);
    });
    if (container != null)
        expect(container.innerHTML).toContain("<table>");
});
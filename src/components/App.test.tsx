import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {act} from "react-dom/test-utils";
import {Grid} from "../classes/Grid";

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

it('should render without crashing', () => {
    act(() => {
        ReactDOM.render(<App />, container);
    });
});

it("should render boards with a table", () => {
    act(() => {
        ReactDOM.render(<App />, container);
    });
    if (container != null)
        expect(container.innerHTML).toContain("<table");
});

it("should render board icons", () => {
    act(() => {
        let grid: Grid = new Grid([
            [1, 2, 3,
            4, 5, 6,
            7, 8, 9]
        ]);
        ReactDOM.render(<App startingGrid={grid} />, container);
    });
    if (container != null) {
        expect(container.innerHTML).toContain("blue");
        expect(container.innerHTML).toContain("red");
        expect(container.innerHTML).toContain("green");
        expect(container.innerHTML).toContain("yellow");
        expect(container.innerHTML).toContain("blank");
    }
});
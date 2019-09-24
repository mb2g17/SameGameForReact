import React from 'react';
import './App.css';

import { Board } from "./Board";
import { Grid } from "../classes/Grid";

interface Props {

}

interface State {
    grid: Grid
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            grid: new Grid([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ])
        };
    }

    render(): React.ReactElement<any> {
        return (
            <div className="App">
                <h1>SameGame for React</h1>
                <h2>by Matthew Barnes</h2>

                <Board grid={this.state.grid} />
            </div>
        );
    }
}

export default App;

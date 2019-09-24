import React from "react";
import _ from "lodash";

import { Grid } from "../classes/Grid";
import { Tile } from "./Tile";

interface Props {
    grid: Grid
}

interface State {
    name: string
}

export class Board extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "Matt"
        };
    }

    render(): React.ReactElement<any> {
        // Gets numerical data of grid
        let gridArray: number[][] = this.props.grid.getData();

        // Declares JSX array to render
        let jsx: React.ReactElement<any>[] = [];

        // For every row
        _.forEach(gridArray, (r: number[], rowKey: number) => {
            // Create our jsx row
            let jsxRow: React.ReactElement<any>[] = [];

            // For every cell in the row
            _.forEach(r, (c: number, cellKey: number) => {
                // Add a cell
                jsxRow.push(<Tile no={c} key={2 ** rowKey * 3 ** cellKey} />);
            });

            // Add row to our table
            jsx.push(<tr key={rowKey}>{ jsxRow }</tr>);
        });

        // Renders jsx
        return (<table><tbody>{jsx}</tbody></table>);
    }
}
import React from "react";
import _ from "lodash";

import { Tile } from "./Tile";

interface Props {
    grid: number[][];
    onClick: (r: number, c: number) => void;
    className?: string;
}

interface State {
}

export class Board extends React.Component<Props, State> {
    /**
     * When user clicks on a tile
     * @param rowNo - the row of the tile clicked
     * @param colNo - the column of the tile clicked
     */
    onTileClick(rowNo: number, colNo: number): void {
        this.props.onClick(rowNo, colNo);
    }

    render(): React.ReactElement<any> {
        // Declares JSX array to render
        let jsx: React.ReactElement<any>[] = [];

        // For every row
        _.forEach(this.props.grid, (r: number[], rowKey: number) => {
            // Create our jsx row
            let jsxRow: React.ReactElement<any>[] = [];

            // For every cell in the row
            _.forEach(r, (c: number, cellKey: number) => {
                // Add a cell
                jsxRow.push(<Tile
                    onClick={() => this.onTileClick(rowKey, cellKey)}
                    no={c}
                    key={2 ** rowKey * 3 ** cellKey}
                />);
            });

            // Add row to our table
            jsx.push(<tr key={rowKey}>{ jsxRow }</tr>);
        });

        // Renders jsx
        return (<table className={this.props.className}>
            <tbody>{jsx}</tbody>
        </table>);
    }
}
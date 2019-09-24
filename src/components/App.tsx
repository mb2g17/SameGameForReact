import React from 'react';
import _ from 'lodash';
import styled from "styled-components";

import { Typography, Button } from 'antd';

import { Board } from "./Board";
import { Grid } from "../classes/Grid";

import './App.css';

const { Title } = Typography;

interface Props {
    startingGrid?: Grid
}

interface State {
    grid: Grid
}

/**
 * Uses flex box to center stuff
 */
const CenteringDiv = styled("div")`
    width: "100vw";
    display: flex;
    justify-content: center;
`;

const StyledBoard = styled(Board)`
    margin: 10px;
`;

const StyledHeading = styled(Title)`
    margin-top: 20px;
`;

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // Sets up grid
        this.state = {
            grid: this.props.startingGrid !== undefined ? this.props.startingGrid : this.randomiseGrid(10)
        };
    }

    /**
     * Randomises the grid
     */
    randomiseGrid(size: number): Grid {
        // Creates a number grid
        let numberGrid: number[][] = [];

        for (let i = 0; i < size; i++)
        {
            numberGrid.push([]);
            for (let j = 0; j < size; j++)
            {
                numberGrid[i].push(_.random(1,4));
            }
        }

        let grid = new Grid(numberGrid);
        this.setState({
            grid: new Grid(numberGrid)
        });
        return grid;
    }

    /**
     * When user clicks on a tile
     * @param row - the row of the tile clicked
     * @param col - the column of the tile clicked
     */
    onTileClick(row: number, col: number): void {
        this.state.grid.select(row, col);
    }

    render(): React.ReactElement<any> {
        return (
            <div className="App">
                <StyledHeading>SameGame for React</StyledHeading>
                <Title level={2}>by Matthew Barnes</Title>

                <CenteringDiv>
                    <StyledBoard
                        onClick={this.onTileClick.bind(this)}
                        grid={this.state.grid.getData()}
                    />
                </CenteringDiv>

                <Button
                    onClick={() => this.randomiseGrid(10)}
                    type="primary"
                >Randomise grid</Button>
            </div>
        );
    }
}

export default App;

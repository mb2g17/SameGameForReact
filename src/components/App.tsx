import React from 'react';
import _ from 'lodash';
import styled from "styled-components";

import { Slider, Typography, Button, Row, Col } from 'antd';

import { Board } from "./Board";
import { Grid } from "../classes/Grid";
import { Config } from "./config/Config";

import './App.css';
import { SliderValue } from 'antd/lib/slider';

const { Title, Text } = Typography;

interface Props {
    startingGrid?: Grid
}

interface State {
    grid: Grid;
    gridSize: number;
    blockCount: number;
}

/**
 * Uses flex box to center stuff
 */
const CenteringStyle = {
    display: "flex",
    justifyContent: "center"
};

const WinStyle = {
    color: "green"
};

const LoseStyle = {
    color: "red"
};

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
            grid: this.props.startingGrid !== undefined ? this.props.startingGrid : this.randomiseGrid(10, 4, true),
            gridSize: 10,
            blockCount: 4
        };
    }

    /**
     * Randomises the grid
     */
    randomiseGrid(size: number, blockCount: number, mount: boolean): Grid {
        // Creates a number grid
        let numberGrid: number[][] = [];

        for (let i = 0; i < size; i++)
        {
            numberGrid.push([]);
            for (let j = 0; j < size; j++)
            {
                numberGrid[i].push(_.random(1,blockCount));
            }
        }

        let grid = new Grid(numberGrid);
        if (!mount)
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
        this.setState({
            ...this.state,
            grid: this.state.grid.select(row, col)
        })
    }

    /**
     * When we change the grid size
     * @param value what to change the grid size to
     */
    onGridSizeChange(value: SliderValue): void {
        let numValue: number = parseInt(value.toString());
        this.randomiseGrid(numValue, this.state.blockCount, false);
        this.setState({
            gridSize: numValue
        });
    }

    /**
     * When we change the block count
     * @param value what to change the block count to
     */
    onBlockCountChange(value: SliderValue): void {
        let numValue: number = parseInt(value.toString());
        this.randomiseGrid(this.state.gridSize, numValue, false);
        this.setState({
            blockCount: numValue
        });
    }

    render(): React.ReactElement<any> {
        let winComponent: React.ReactElement | null = null;

        if (this.state.grid.isGameFinished())
        {
            if (this.state.grid.didWeWin())
                winComponent = <Title level={3} style={WinStyle}>You win!</Title>;
            else
                winComponent = <Title level={3} style={LoseStyle}>You lose!</Title>;
        }

        return (
            <div className="App">
                <StyledHeading>SameGame for React</StyledHeading>
                <Title level={2}>by Matthew Barnes</Title>

                <Row>
                    <Col xs={0} md={4} />

                    <Col xs={{span: 24, pull: 0}} md={{span: 6, push: 10}}>
                        <Config
                            gridSize={this.state.gridSize}
                            blockCount={this.state.blockCount}
                            onRandomiseGridClick={() => this.randomiseGrid(this.state.gridSize, this.state.blockCount, false)}
                            onGridSizeChange={this.onGridSizeChange.bind(this)}
                            onBlockCountChange={this.onBlockCountChange.bind(this)}
                        />
                    </Col>

                    <Col xs={{span: 24, push: 0}} md={{span: 10, pull: 6}} style={CenteringStyle}>

                        <Row style={{width: "100%"}}>
                            <Col span={24} style={CenteringStyle}>
                                <StyledBoard
                                    onClick={this.onTileClick.bind(this)}
                                    grid={this.state.grid.getData()}
                                />
                            </Col>
                            <Col span={24}>
                                {winComponent != null ? winComponent : <React.Fragment />}
                            </Col>
                        </Row>

                    </Col>

                    <Col xs={0} md={4} />
                </Row>
            </div>
        );
    }
}

export default App;

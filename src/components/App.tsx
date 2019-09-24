import React from 'react';
import _ from 'lodash';
import styled from "styled-components";

import { Slider, Typography, Button, Row, Col } from 'antd';

import { Board } from "./Board";
import { Grid } from "../classes/Grid";

import './App.css';

const { Title, Text } = Typography;

interface Props {
    startingGrid?: Grid
}

interface State {
    grid: Grid;
    gridSize: number;
}

/**
 * Uses flex box to center stuff
 */
const CenteringDiv = styled("div")`
    width: "100%";
    display: flex;
    justify-content: center;
`;

const StyledBoard = styled(Board)`
    margin: 10px;
`;

const StyledHeading = styled(Title)`
    margin-top: 20px;
`;

const StyledSlider = styled(Slider)`
    width: 75%;
`;

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // Sets up grid
        this.state = {
            grid: this.props.startingGrid !== undefined ? this.props.startingGrid : this.randomiseGrid(10),
            gridSize: 10
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
        this.forceUpdate();
    }

    /**
     * When we slide the slider
     */
    onSliderSlide(value: any): void {
        this.randomiseGrid(value);
        this.setState({
            gridSize: value
        });
    }

    render(): React.ReactElement<any> {
        return (
            <div className="App">
                <StyledHeading>SameGame for React</StyledHeading>
                <Title level={2}>by Matthew Barnes</Title>

                <Row>
                    <Col span={4}></Col>
                    <Col span={10}>
                        <CenteringDiv>
                            <StyledBoard
                                onClick={this.onTileClick.bind(this)}
                                grid={this.state.grid.getData()}
                            />
                        </CenteringDiv>
                    </Col>
                    <Col span={6}>
                        <Button
                            onClick={() => this.randomiseGrid(this.state.gridSize)}
                            type="primary"
                        >Randomise grid</Button>

                        <CenteringDiv>
                            <StyledSlider
                                min={3}
                                max={15}
                                onChange={this.onSliderSlide.bind(this)}
                                defaultValue={10}
                            />
                        </CenteringDiv>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>
        );
    }
}

export default App;

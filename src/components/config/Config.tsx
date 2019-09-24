import * as React from "react";
import {Button, Col, Slider, Typography, Row} from "antd";
import { SliderValue } from "antd/lib/slider";
import styled from "styled-components";

const {Text} = Typography;

interface Props {
    gridSize: number;
    blockCount: number;
    onGridSizeChange: (e: SliderValue) => void;
    onBlockCountChange: (e: SliderValue) => void;
    onRandomiseGridClick: () => void;
}

interface State {
}

export class Config extends React.Component<Props, State> {
    render(): React.ReactElement<any> {
        return (<div>
            <Button
                onClick={this.props.onRandomiseGridClick}
                type="primary"
            >Randomise grid</Button>

            <Row>
                <Col span={11}>
                    <Text>Grid size ({this.props.gridSize})</Text>
                    <Slider
                        min={3}
                        max={15}
                        onChange={this.props.onGridSizeChange}
                        value={this.props.gridSize}
                    />
                </Col>
                <Col span={2} />
                <Col span={11}>
                    <Text>Block count ({this.props.blockCount})</Text>
                    <Slider
                        min={2}
                        max={7}
                        onChange={this.props.onBlockCountChange}
                        value={this.props.blockCount}
                    />
                </Col>
            </Row>
        </div>);
    }
}
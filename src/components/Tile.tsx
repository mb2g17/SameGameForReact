import * as React from "react";

import red from "../assets/red.fw.png";
import blue from "../assets/blue.fw.png";
import green from "../assets/green.fw.png";
import yellow from "../assets/yellow.fw.png";
import blank from "../assets/blank.fw.png";

interface Props {
    no: number;
    onClick: (no: number) => void;
}

interface State {
}

export class Tile extends React.Component<Props, State> {
    render(): React.ReactElement<any> {
        let colour: string;
        switch (this.props.no)
        {
            case 1:
                colour = blue;
                break;
            case 2:
                colour = red;
                break;
            case 3:
                colour = green;
                break;
            case 4:
                colour = yellow;
                break;
            default:
                colour = blank;
                break;
        }

        return (<td>
            <img
                onClick={() => this.props.onClick(this.props.no)}
                src={colour}
                alt={"" + this.props.no}
            />
        </td>);
    }
}
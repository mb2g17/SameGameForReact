import * as React from "react";

interface Props {
    no: number;
    onClick: (no: number) => void;
}

interface State {
}

export class Tile extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactElement<any> {
        let colour: string;
        switch (this.props.no)
        {
            case 1:
                colour = "blue";
                break;
            case 2:
                colour = "red";
                break;
            case 3:
                colour = "green";
                break;
            case 4:
                colour = "yellow";
                break;
            default:
                colour = "blank";
                break;
        }

        return (<td>
            <img
                onClick={() => this.props.onClick(this.props.no)}
                src={require("../assets/" + colour + ".fw.png")}
            />
        </td>);
    }
}
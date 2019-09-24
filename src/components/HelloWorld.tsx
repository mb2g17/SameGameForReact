import React from 'react';

interface Props {
    exclamationMark: boolean;
}

export class HelloWorld extends React.Component<Props> {
    static defaultProps: object = {
        exclamationMark: true
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <h1>Hello world{this.props.exclamationMark ? '!' : ''}</h1>;
    }
}
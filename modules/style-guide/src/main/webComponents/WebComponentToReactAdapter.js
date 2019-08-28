// @flow
import * as React from "react";
import { setReactPropsOnElement, updateReactPropsOnElement } from "./ReactToElementProps";

export const asReactComponent = <D, T: { ...D }>(TagName: string, defaultProps: D): React.ComponentType<T> => {
    return class extends React.Component<T> {
        component: any;

        static defaultProps = defaultProps;

        constructor(props: T) {
            super(props);

            // $FlowFixMe
            this.component = React.createRef();
        }

        componentDidMount() {
            const element = this.component.current;
            setReactPropsOnElement(element, this.props);
        }

        componentDidUpdate(prevProps: T) {
            const element = this.component.current;
            updateReactPropsOnElement(element, this.props, prevProps);
        }

        render() {
            return (
                <TagName ref={this.component}>
                    {
                        //$FlowFixMe: The generic D must be thought more through
                        this.props.children
                    }
                </TagName>
            );
        }
    };
};

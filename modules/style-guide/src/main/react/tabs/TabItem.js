// @flow
import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

type Props = {
    text: string,
    checked?: boolean,
    onClick: any,
    index: number,
    className?: string
};

export default class TabItem extends React.Component<Props> {
    static propTypes = {
        text: PropTypes.string,
        checked: PropTypes.bool,
        onClick: PropTypes.func,
        className: PropTypes.string
    };

    static defaultProps = {
        checked: false
    };

    onClick = (): void => {
        const { index } = this.props;
        this.props.onClick(index);
    };

    render(): React.Node {
        const { text, checked, className, index } = this.props;
        return (
            <div
                onClick={this.onClick}
                id={`l-tab-item-${index}`}
                className={classNames("l-tab", { "l-tab-checked": checked }, className)}
            >
                {text}
            </div>
        );
    }
}

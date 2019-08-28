// @flow
import * as React from "react";
import classNames from "classnames";
import TabItem from "./TabItem";
import TabSeparator from "./TabSeparator";
import PropTypes from "prop-types";

type Props = {
    headings: string[],
    children: React.Node[],
    className?: string,
    tabItemClassName?: string,
    tabSeparatorClassName?: string,
    onTabChange?: Function
};

type State = {
    tabIndex: number
};

export default class Tab extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { tabIndex: 0 };
    }

    static propTypes = {
        headings: PropTypes.arrayOf(PropTypes.string),
        children: PropTypes.arrayOf(PropTypes.element.isRequired),
        className: PropTypes.string,
        onTabChange: PropTypes.func,
        tabItemClassName: PropTypes.string,
        tabSeparatorClassName: PropTypes.string
    };

    changeTab = (tabIndex: any): void => {
        const { onTabChange } = this.props;
        if (onTabChange) {
            onTabChange();
        }
        this.setState({ tabIndex });
    };

    render(): React.Node {
        const { headings, children, className, tabItemClassName, tabSeparatorClassName } = this.props;
        const { tabIndex } = this.state;
        return (
            <div className={classNames("l-tabs", className)}>
                <div className="l-tabs-list">
                    {headings.map((item, index, array) => (
                        <React.Fragment key={index}>
                            <TabItem
                                text={item}
                                onClick={() => {
                                    this.changeTab(index);
                                }}
                                index={index}
                                className={tabItemClassName}
                                checked={tabIndex === index}
                            />
                            {(index === 0 || (array.length > index && index < array.length - 1)) && (
                                <TabSeparator className={tabSeparatorClassName} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="l-tab-panels">
                    {children.map((children, index) => (
                        <div
                            key={index}
                            className={classNames("l-tab-panel", { "l-tab-panel-show": tabIndex === index })}
                        >
                            {children}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

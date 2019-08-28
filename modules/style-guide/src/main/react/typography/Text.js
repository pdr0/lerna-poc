// @flow
import * as React from "react";
import classNames from "classnames";
type TextProps = {
    children: Array<React.Node> | React.Node,
    className?: string,
    dangerouslySetInnerHTML?: string
};
export default function Text(props: TextProps) {
    return (
        <p
            className={classNames("l-paragraph", props.className)}
            dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
        >
            {props.children}
        </p>
    );
}

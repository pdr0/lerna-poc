// @flow
import * as React from "react";
import classNames from "classnames";

type LotteryBallProps = {
    children?: React.Node,
    className?: string,
    style?: Object
};

export const LotteryBall = (props: LotteryBallProps) => {
    return (
        <li className={classNames("l-lottery-number", props.className)} style={props.style}>
            {props.children}
        </li>
    );
};

LotteryBall.displayName = "LotteryBall";

export default LotteryBall;

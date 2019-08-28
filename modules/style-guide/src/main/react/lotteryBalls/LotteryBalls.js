import * as React from "react";
import { LotteryBall } from "../lotteryBall/LotteryBall";
import classNames from "classnames";

type LotteryBallsProps = {
    numbers: Array<number>,
    className?: string
};

export const LotteryBalls = (props: LotteryBallsProps) => {
    return (
        <ul className={classNames("l-lottery-numbers", props.className)}>
            {props.numbers.map((number, index) => (
                <LotteryBall key={index}>{number}</LotteryBall>
            ))}
        </ul>
    );
};

LotteryBalls.displayName = "LotteryBalls";

export default LotteryBalls;

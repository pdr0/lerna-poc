// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import Progress from "./Progress";
import LotteryBalls from "../lotteryBalls/LotteryBalls";

storiesOf("Progress", module).add("default", () => (
    <Progress>
        <p>
            First of all, we take the last 2 digits from the opening value of various stock markets to generate a 10
            digit number.
            <LotteryBalls numbers={[1, 5, 6, 7, 8]} />
            <LotteryBalls numbers={[1, 5, 6, 7, 8]} />
            <LotteryBalls numbers={[1, 5, 6, 7, 8]} />
        </p>
        <p>
            This 10 digit number is linked to the below combination of numbers to form the jackpot result: There are XXX
            unique combinations of jackpot results!
            <LotteryBalls numbers={[1, 5, 6, 7, 8]} />
        </p>
        <p>
            First of all, we take the last 2 digits from the opening value of various stock markets to generate a 10
            digit number.
            <LotteryBalls numbers={[1, 5, 6, 7, 8]} />
            <LotteryBalls numbers={[1, 5, 6, 7, 8]} />
            <LotteryBalls numbers={[1, 5, 6, 7, 8]} />
        </p>
    </Progress>
));

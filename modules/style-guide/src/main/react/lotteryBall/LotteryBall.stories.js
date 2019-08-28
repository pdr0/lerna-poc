// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import LotteryBall from "./LotteryBall";

storiesOf("Lottery ball", module).add("default", () => (
    <ul>
        <LotteryBall>11</LotteryBall>
    </ul>
));

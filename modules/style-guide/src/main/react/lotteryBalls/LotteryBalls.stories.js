// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import LotteryBalls from "./LotteryBalls";

storiesOf("Lottery balls", module).add("default", () => (
    <ul>
        <LotteryBalls numbers={[1, 2, 3, 11, 22]} />
    </ul>
));

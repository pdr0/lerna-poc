// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import Spinner from "./Spinner";

storiesOf("Spinner", module)
    .add("default", () => (
        <ul>
            <Spinner />
        </ul>
    ))
    .add("with text", () => (
        <ul>
            <Spinner text="Text message" />
        </ul>
    ));

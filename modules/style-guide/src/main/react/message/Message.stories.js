// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Message from "./Message";

storiesOf("Message", module).add(
    "success",
    withInfo()(() => <Message success>Congratulations! Everything went fine.</Message>)
);

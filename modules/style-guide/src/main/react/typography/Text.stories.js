import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Text from "./Text";

storiesOf("Text", module)
    .add("basic", withInfo()(() => <Text>I'm a cool basic text without a reference!</Text>))
    .add(
        "with strong",
        withInfo()(() => (
            <Text>
                I'm a cool basic <strong>bold text</strong> without a reference!
            </Text>
        ))
    );

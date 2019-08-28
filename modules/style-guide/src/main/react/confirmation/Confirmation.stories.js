import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Confirmation from "./Confirmation";

storiesOf("Confirmation", module).add(
    "default",
    withInfo()(() => (
        <Confirmation
            onConfirm={action("Confirmed")}
            onAbort={action("Aborted")}
            confirmText="I am sure, set limit"
            abortText="Go back"
            messageText="Are you sure you want to add limit? If you would like to change this after, it can take up to 7 days."
        />
    ))
);

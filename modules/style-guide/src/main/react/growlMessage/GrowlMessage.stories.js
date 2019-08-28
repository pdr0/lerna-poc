// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
import GrowlMessage from "./GrowlMessage";

storiesOf("GrowlMessage", module).add(
    "default",
    withInfo()(
        withState({ displayed: true }, store => (
            <div>
                <span onClick={() => store.set({ displayed: !store.state.displayed })} style={{ cursor: "pointer" }}>
                    Toggle growl message
                </span>
                <GrowlMessage onClose={() => store.set({ displayed: false })} displayed={store.state.displayed}>
                    Some growl message
                </GrowlMessage>
            </div>
        ))
    )
);

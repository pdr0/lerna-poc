// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import Tab from "./Tab";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
const headings = ["Enter 10 Digit Number", "Jackpot result"];
const moreheadings = ["Tab head 1", "Tab head 2", "Tab head 3", "Tab head 4", "Tab head 5"];
const overlayWithToggle = store => (
    <div style={{ height: 400, width: "100%", position: "relative", textAlign: "center", marginTop: "50px" }}>
        <Tab headings={headings}>
            <div>Tab panel content 1</div>
            <div>Tab panel content 2</div>
        </Tab>
    </div>
);
const lotOfTabs = store => (
    <div style={{ height: 400, width: "100%", position: "relative", textAlign: "center", marginTop: "50px" }}>
        <Tab headings={moreheadings}>
            <div>Tab panel content 1</div>
            <div>Tab panel content 2</div>
            <div>Tab panel content 3</div>
            <div>Tab panel content 4</div>
            <div>Tab panel content 5</div>
        </Tab>
    </div>
);

storiesOf("Tabs", module)
    .add("default", withInfo()(withState({ displayed: true }, overlayWithToggle)))
    .add("lot of tabs", withInfo()(withState({ displayed: true }, lotOfTabs)));

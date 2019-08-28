import * as React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import MobilePresetableDatePicker from "./MobilePresetableDatePicker";

storiesOf("MobilePresetableDatePicker", module)
    .add("default", withInfo()(() => <MobilePresetableDatePicker />))
    .add("today", withInfo()(() => <MobilePresetableDatePicker range={{ startDate: moment(), endDate: moment() }} />))
    .add(
        "last 3 days",
        withInfo()(() => (
            <MobilePresetableDatePicker range={{ startDate: moment().subtract(3, "day"), endDate: moment() }} />
        ))
    )
    .add(
        "last week",
        withInfo()(() => (
            <MobilePresetableDatePicker range={{ startDate: moment().subtract(1, "week"), endDate: moment() }} />
        ))
    );

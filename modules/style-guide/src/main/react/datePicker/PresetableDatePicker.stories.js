import * as React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import PresetableDatePicker from "./PresetableDatePicker";

storiesOf("PresetableDatePicker", module)
    .add("default", withInfo()(() => <PresetableDatePicker />))
    .add("today", withInfo()(() => <PresetableDatePicker range={{ startDate: moment(), endDate: moment() }} />))
    .add(
        "last 3 days",
        withInfo()(() => <PresetableDatePicker range={{ startDate: moment().subtract(3, "day"), endDate: moment() }} />)
    )
    .add(
        "last week",
        withInfo()(() => (
            <PresetableDatePicker range={{ startDate: moment().subtract(1, "week"), endDate: moment() }} />
        ))
    );

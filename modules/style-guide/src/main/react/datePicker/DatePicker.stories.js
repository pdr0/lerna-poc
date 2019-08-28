import * as React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import DatePicker from "./DatePicker";

storiesOf("DatePicker", module)
    .add("default", withInfo("Basic DatePicker")(() => <DatePicker />))
    .add("today", withInfo()(() => <DatePicker range={{ startDate: moment(), endDate: moment() }} />))
    .add(
        "last 3 days",
        withInfo()(() => <DatePicker range={{ startDate: moment().subtract(3, "day"), endDate: moment() }} />)
    )
    .add(
        "last week",
        withInfo()(() => <DatePicker range={{ startDate: moment().subtract(1, "week"), endDate: moment() }} />)
    );

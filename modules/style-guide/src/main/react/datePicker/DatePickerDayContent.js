// @flow

import * as React from "react";
import type Moment from "moment";

type Props = {
    day: Moment
};

const DatePickerDayContent = ({ day }: Props) => <div className="date-picker-day-content">{day.format("D")}</div>;

export default DatePickerDayContent;

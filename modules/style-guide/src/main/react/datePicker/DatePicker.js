// @flow

import "react-dates/initialize";
import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { DayPickerRangeController, isInclusivelyAfterDay, isInclusivelyBeforeDay } from "react-dates";
import type Moment from "moment";
import moment from "moment";
import DatePickerDayContent from "./DatePickerDayContent";
import type { DateRange } from "../../types/datePicker/DateRange";
import { dateRangePropType } from "../../types/datePicker/DateRange";

type Props = {
    /** Object containing startDate and endDate. Null or Moment object */
    range?: DateRange,

    /** String identifier to control which date is going to be selected. startDate, endDate or null */
    focusedInput?: string,

    /** Callback when date is changed (DateRange as first param) */
    onDatesChange?: Function,

    /** Callback when focus is changed (values: startDate, endDate or null) */
    onFocusChange?: Function,

    /** Possibility to add class as string */
    className?: string
};

class DatePicker extends React.Component<Props> {
    static customElementProps = ["range", "focusedInput", "onDatesChange", "onFocusChange", "className"];

    isOutsideRange(date: Moment) {
        const beforeDate = moment()
            .subtract(3, "months")
            .subtract(1, "day");
        const afterDate = moment().add(1, "day");

        return isInclusivelyBeforeDay(date, beforeDate) || isInclusivelyAfterDay(date, afterDate);
    }

    onDatesChange(range: DateRange) {
        const { onDatesChange } = this.props;
        if (!onDatesChange) {
            return;
        }
        const newDateRange = { ...range };
        if (newDateRange.startDate) {
            newDateRange.startDate = newDateRange.startDate.startOf("day");
        }
        if (newDateRange.endDate) {
            newDateRange.endDate = newDateRange.endDate.endOf("day");
        }
        onDatesChange(newDateRange);
    }

    render() {
        const { range, focusedInput, onFocusChange, className } = this.props;
        const classes = classNames("date-picker", className);

        return (
            <div className={classes}>
                <DayPickerRangeController
                    {...range}
                    focusedInput={focusedInput}
                    minimumNights={0}
                    noBorder={true}
                    navPrev={<i className="icon icon-arrow-67 t-dateRangePrev" />}
                    navNext={<i className="icon icon-arrow-68 t-dateRangeNext" />}
                    hideKeyboardShortcutsPanel={true}
                    renderDayContents={day => <DatePickerDayContent day={day} />}
                    isOutsideRange={this.isOutsideRange.bind(this)}
                    onDatesChange={this.onDatesChange.bind(this)}
                    onFocusChange={onFocusChange}
                />
            </div>
        );
    }
}

DatePicker.propTypes = {
    range: dateRangePropType,
    focusedInput: PropTypes.string,
    onDatesChange: PropTypes.func,
    onFocusChange: PropTypes.func,
    className: PropTypes.string
};

export default DatePicker;

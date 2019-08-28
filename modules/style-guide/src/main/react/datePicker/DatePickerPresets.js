// @flow

import * as React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import classNames from "classnames";
import type { DatePickerPreset } from "../../types/datePicker/DatePickerPreset";
import { datePickerPresetPropType } from "../../types/datePicker/DatePickerPreset";

export type Props = {
    /** Presets to display */
    presets: Array<DatePickerPreset>,

    /** Active preset id */
    activeId?: number | null,

    /** Callback for preset click - preset will be passed as first param */
    onPresetClick: Function
};

// ToDo: Write tests
const DatePickerPresets = ({ presets, activeId, onPresetClick }: Props) => {
    return (
        <ul className="date-picker-presets">
            {presets.map((preset: DatePickerPreset) => {
                const isActive = preset.id === activeId;
                const classes = classNames("date-picker-preset", {
                    active: isActive
                });
                return (
                    <li
                        key={preset.id}
                        className={classes}
                        onClick={() => {
                            if (isActive) {
                                return;
                            }
                            onPresetClick(preset);
                        }}
                    >
                        {preset.name}
                    </li>
                );
            })}
        </ul>
    );
};

DatePickerPresets.displayName = "DatePickerPresets";

DatePickerPresets.customElementProps = ["presets", "activeId", "onPresetClick"];

DatePickerPresets.propTypes = {
    presets: PropTypes.arrayOf(datePickerPresetPropType).isRequired,
    activeId: PropTypes.number,
    onPresetClick: PropTypes.func.isRequired
};

DatePickerPresets.defaultProps = {
    presets: [
        { id: 1, name: "Today", startDate: moment(), endDate: moment() },
        { id: 2, name: "Last 24 Hours", startDate: moment().subtract(1, "day"), endDate: moment() },
        { id: 3, name: "Last 3 Days", startDate: moment().subtract(3, "day"), endDate: moment() },
        { id: 4, name: "Last Week", startDate: moment().subtract(1, "week"), endDate: moment() },
        { id: 5, name: "Last Month", startDate: moment().subtract(1, "month"), endDate: moment() },
        { id: 6, name: "Last 3 Months", startDate: moment().subtract(3, "month"), endDate: moment() }
    ]
};

export default DatePickerPresets;

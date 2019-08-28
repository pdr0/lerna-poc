// @flow

import * as React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import DatePicker from "./DatePicker";
import DatePickerPresets from "./DatePickerPresets";
import type { DateRange } from "../../types/datePicker/DateRange";
import type { DatePickerPreset } from "../../types/datePicker/DatePickerPreset";

type Props = {
    /** Callback when date is changed */
    onDatesChange?: Function,

    /** Callback when focus is changed */
    onFocusChange?: Function,

    /** Initial date range */
    range?: DateRange,

    children?: React.Node,
    todayTranslation: React.Node,
    lastHoursTranslation: (hours: number) => React.Node,
    lastDaysTranslation: (days: number) => React.Node,
    lastWeekTranslation: React.Node,
    lastMonthTranslation: React.Node,
    lastMonthsTranslation: (months: number) => React.Node
};

type State = {
    range: DateRange,
    focusedInput: string,
    activePresetId: number | null,
    refreshDatePicker: boolean
};

class PresetableDatePicker extends React.Component<Props, State> {
    static propTypes = {
        onDatesChange: PropTypes.func,
        todayTranslation: PropTypes.node,
        lastHoursTranslation: PropTypes.func,
        lastDaysTranslation: PropTypes.func,
        lastWeekTranslation: PropTypes.node,
        lastMonthTranslation: PropTypes.node,
        lastMonthsTranslation: PropTypes.func
    };

    static defaultProps = {
        todayTranslation: "Today",
        lastHoursTranslation: (hours: number) => `Last ${hours} Hours`,
        lastDaysTranslation: (days: number) => `Last ${days} Days`,
        lastWeekTranslation: "Last Week",
        lastMonthTranslation: "Last Month",
        lastMonthsTranslation: (months: number) => `Last ${months} Months`
    };

    constructor(props: Props) {
        super(props);

        const defaultRange: DateRange = {
            startDate: null,
            endDate: null
        };

        const range = this.props.range || defaultRange;
        this.state = {
            range: range,
            focusedInput: !range.startDate || (range.startDate && range.endDate) ? "startDate" : "endDate",
            activePresetId: (this.props.range && this.findActivePresetId(this.props.range)) || null,
            refreshDatePicker: true
        };
    }

    presets: Array<DatePickerPreset> = [
        {
            id: 1,
            name: this.props.todayTranslation,
            startDate: moment().startOf("day"),
            endDate: moment().endOf("day")
        },
        {
            id: 2,
            name: this.props.lastHoursTranslation(24),
            startDate: moment().subtract(1, "day"),
            endDate: moment().endOf("day")
        },
        {
            id: 3,
            name: this.props.lastDaysTranslation(3),
            startDate: moment()
                .subtract(3, "day")
                .startOf("day"),
            endDate: moment().endOf("day")
        },
        {
            id: 4,
            name: this.props.lastWeekTranslation,
            startDate: moment()
                .subtract(1, "week")
                .startOf("day"),
            endDate: moment().endOf("day")
        },
        {
            id: 5,
            name: this.props.lastMonthTranslation,
            startDate: moment()
                .subtract(1, "month")
                .startOf("day"),
            endDate: moment().endOf("day")
        },
        {
            id: 6,
            name: this.props.lastMonthsTranslation(3),
            startDate: moment()
                .subtract(3, "month")
                .startOf("day"),
            endDate: moment().endOf("day")
        }
    ];

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.range !== this.state.range) {
            this.setState({
                range: nextProps.range,
                activePresetId: (nextProps.range && this.findActivePresetId(nextProps.range)) || null
            });
        }
    }

    onPresetClick(preset: DatePickerPreset) {
        const range = {
            startDate: preset.startDate,
            endDate: preset.endDate
        };
        this.onDatesChange(range);
        this.setState(
            {
                activePresetId: preset.id,
                range,
                refreshDatePicker: false
            },
            () => {
                this.setState({ refreshDatePicker: true });
            }
        );
    }

    onDatesChange(range: DateRange): void {
        const { onDatesChange } = this.props;

        if (onDatesChange) {
            onDatesChange(range);
        }

        this.setState({
            range,
            activePresetId: this.findActivePresetId(range)
        });
    }

    onFocusChange(focusedInput: string | null): void {
        const { onFocusChange } = this.props;

        if (onFocusChange) {
            onFocusChange(focusedInput || "startDate");
        }

        this.setState({ focusedInput: focusedInput || "startDate" });
    }

    // ToDo: Write test
    findActivePresetId(range: DateRange): number | null {
        const { startDate, endDate } = range;
        let id = null;

        for (let preset of this.presets) {
            if (
                startDate &&
                endDate &&
                preset.startDate.isSame(startDate, "day") &&
                preset.endDate.isSame(endDate, "day")
            ) {
                id = preset.id;
            }
        }

        return id;
    }

    render() {
        const { activePresetId, focusedInput, range, refreshDatePicker } = this.state;
        const { children } = this.props;

        return (
            <div className="presetable-date-picker">
                <div className="row align-items-center">
                    <div className="col-6">
                        <DatePickerPresets
                            activeId={activePresetId}
                            onPresetClick={this.onPresetClick.bind(this)}
                            presets={this.presets}
                        />
                    </div>
                    <div className="col-6">
                        {refreshDatePicker && (
                            <DatePicker
                                range={range}
                                focusedInput={focusedInput}
                                onDatesChange={this.onDatesChange.bind(this)}
                                onFocusChange={this.onFocusChange.bind(this)}
                            />
                        )}
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default PresetableDatePicker;

// @flow

import * as React from "react";
import type { DatePickerPreset } from "../../types/datePicker/DatePickerPreset";
import moment from "moment";
import DateInput from "./DateInput";
import Overlay from "../overlay/Overlay";
import DatePicker from "./DatePicker";
import DatePickerPresets from "./DatePickerPresets";
import type { DateRange } from "../../types/datePicker/DateRange";

type Props = {
    /** Callback when date is changed */
    onDatesChange?: Function,

    /** Callback when focus is changed */
    onFocusChange?: Function,

    children: React.Node,
    range?: DateRange,
    todayTranslation: React.Node,
    lastHoursTranslation: (hours: number) => React.Node,
    lastDaysTranslation: (days: number) => React.Node,
    lastWeekTranslation: React.Node,
    lastMonthTranslation: React.Node,
    lastMonthsTranslation: (months: number) => React.Node,
    fromTranslation: React.Node,
    toTranslation: React.Node
};

type State = {
    range: DateRange,
    focusedInput: string,
    activePresetId: number | null,
    rangeSelectionOpen: boolean
};

class MobilePresetableDatePicker extends React.Component<Props, State> {
    static defaultProps = {
        todayTranslation: "Today",
        lastHoursTranslation: (hours: number) => `Last ${hours} Hours`,
        lastDaysTranslation: (days: number) => `Last ${days} Days`,
        lastWeekTranslation: "Last Week",
        lastMonthTranslation: "Last Month",
        lastMonthsTranslation: (months: number) => `Last ${months} Months`,
        fromTranslation: "From",
        toTranslation: "To"
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
            rangeSelectionOpen: false
        };
    }

    presets: Array<DatePickerPreset> = [
        { id: 1, name: this.props.todayTranslation, startDate: moment().startOf("day"), endDate: moment() },
        { id: 2, name: this.props.lastHoursTranslation(24), startDate: moment().subtract(1, "day"), endDate: moment() },
        {
            id: 3,
            name: this.props.lastDaysTranslation(3),
            startDate: moment()
                .subtract(3, "day")
                .startOf("day"),
            endDate: moment()
        },
        {
            id: 4,
            name: this.props.lastWeekTranslation,
            startDate: moment()
                .subtract(1, "week")
                .startOf("day"),
            endDate: moment()
        },
        {
            id: 5,
            name: this.props.lastMonthTranslation,
            startDate: moment()
                .subtract(1, "month")
                .startOf("day"),
            endDate: moment()
        },
        {
            id: 6,
            name: this.props.lastMonthsTranslation(3),
            startDate: moment()
                .subtract(3, "month")
                .startOf("day"),
            endDate: moment()
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
        this.setState({
            activePresetId: preset.id,
            range,
            rangeSelectionOpen: false
        });
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

        const newFocusedInput = focusedInput || "startDate";
        if (onFocusChange) {
            onFocusChange(newFocusedInput);
        }

        this.setState({
            focusedInput: newFocusedInput,
            rangeSelectionOpen: focusedInput === null ? false : this.state.rangeSelectionOpen
        });
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

    toggleRangeSelection() {
        this.setState({ rangeSelectionOpen: !this.state.rangeSelectionOpen });
    }

    render() {
        const { children } = this.props;
        const { range, activePresetId, focusedInput, rangeSelectionOpen } = this.state;

        const toggleOverlay = () => this.toggleRangeSelection();

        return (
            <div>
                <div className="date-inputs" style={{ position: "relative" }}>
                    <DateInput
                        label={this.props.fromTranslation}
                        onClick={toggleOverlay}
                        active={rangeSelectionOpen && focusedInput === "startDate"}
                        date={range && range.startDate}
                    />
                    <DateInput
                        label={this.props.toTranslation}
                        onClick={toggleOverlay}
                        active={rangeSelectionOpen && focusedInput === "endDate"}
                        date={range && range.endDate}
                    />
                    <Overlay displayed={rangeSelectionOpen} position="bottom" center={true}>
                        <DatePicker
                            range={range}
                            focusedInput={focusedInput}
                            onDatesChange={this.onDatesChange.bind(this)}
                            onFocusChange={this.onFocusChange.bind(this)}
                        />
                    </Overlay>
                </div>
                <DatePickerPresets
                    activeId={activePresetId}
                    onPresetClick={this.onPresetClick.bind(this)}
                    presets={this.presets}
                />
                {children}
            </div>
        );
    }
}

export default MobilePresetableDatePicker;

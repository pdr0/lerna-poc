// @flow

import * as React from "react";
import type Moment from "moment";
import classNames from "classnames";

type Props = {
    date?: Moment | null,
    placeholder: string,
    label: React.Node,
    active?: boolean,
    className?: string
};

const DateInput = ({ date, placeholder, label, active, className, ...props }: Props) => {
    const classes = classNames("date-input", { active }, className);

    let labelEl;
    if (typeof label === "function") {
        const LabelComponent = label;
        labelEl = <LabelComponent className="label" />;
    } else {
        labelEl = <span className="label">{label}</span>;
    }

    return (
        <div className={classes} {...props}>
            {labelEl}
            <span className="date">
                {date ? date.format("DD/MMM/YYYY") : placeholder}

                <i className="calendar-icon icon icon-calendar-2 asdf" />
            </span>
        </div>
    );
};

DateInput.defaultProps = {
    placeholder: "dd/mm/yyyy"
};

export default DateInput;

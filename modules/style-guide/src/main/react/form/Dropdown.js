// @flow

import * as React from "react";
import classNames from "classnames";

export type Option = {
    label: string,
    value: string,
    disabled?: boolean
};

type Props = {
    name: string,
    options: Array<Option>,
    emptyOption?: Option,
    isValid?: ?boolean,
    className?: string,
    value?: string,
    disabled: boolean,
    trackName?: string
};

/**
 * Dropdown form component
 */
const Dropdown = ({ options, emptyOption, className, isValid, value, disabled, trackName, ...props }: Props) => {
    const optionTags =
        options &&
        options.map(({ label, value, disabled }: Option, index) => (
            <option key={index} value={value} disabled={disabled}>
                {label}
            </option>
        ));

    // Select the placeholder when value is undefined
    // and placeholder is given
    if (!value && emptyOption) {
        value = emptyOption.value;
    }

    const validClasses = {
        "is-valid": isValid,
        "is-invalid": isValid === false,
        "is-selected": value && value !== "",
        "is-empty-option": emptyOption && value === emptyOption.value,
        "is-disabled": disabled
    };

    const classes = classNames("dropdown", validClasses, className);

    return (
        <div className={classes}>
            <select value={value} disabled={disabled} data-track-name={trackName} {...props}>
                {emptyOption && (
                    <option className="empty-option" value={emptyOption.value} disabled={emptyOption.disabled}>
                        {emptyOption.label}
                    </option>
                )}
                {optionTags}
            </select>
        </div>
    );
};

Dropdown.defaultProps = {
    disabled: false
};

export default Dropdown;

// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

type Props = {
    type: "text" | "email" | "password" | "tel" | "number",
    value?: string,
    className?: string,
    valid?: boolean,
    disabled?: boolean,
    onBlur?: Function,
    onClick?: Function,
    trackName?: string,
    trackListeners?: string
};

const Input = ({
    type,
    valid,
    className,
    value,
    disabled,
    onBlur,
    onClick,
    trackName,
    trackListeners,
    ...props
}: Props) => {
    const validClasses = {
        "is-valid": valid,
        "is-invalid": valid === false,
        "is-filled": value && value !== "",
        "is-disabled-with-value": value && disabled
    };

    const classes = classNames("input", validClasses, className);

    const isNumberKey = key => {
        if (key > 31 && (key < 48 || key > 57) && key !== 46) {
            return false;
        }

        return true;
    };

    return (
        <input
            type={type}
            className={classes}
            value={value}
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            onKeyPress={event => type === "number" && !isNumberKey(event.which) && event.preventDefault()}
            data-track-name={trackName}
            data-track-listeners={trackListeners}
            {...props}
        />
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "tel", "number"]).isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    valid: PropTypes.bool,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    trackName: PropTypes.string,
    trackListeners: PropTypes.string
};

export default Input;

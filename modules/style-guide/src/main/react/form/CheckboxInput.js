// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

type Props = {
    checked: boolean,
    disabled: boolean,
    className?: string,
    trackName?: string,
    onClick?: Function
};

const CheckboxInput = ({ checked, disabled, className, trackName, onClick, ...props }: Props) => {
    const containerClasses = classNames("checkbox-container", className);
    return (
        <div className={containerClasses}>
            <input
                className="checkbox-input"
                type={"checkbox"}
                checked={checked}
                onChange={onClick}
                disabled={disabled}
                data-track-name={trackName}
                {...props}
            />
            <span className="checkbox-marker" />
        </div>
    );
};

CheckboxInput.propTypes = {
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    className: PropTypes.string,
    trackName: PropTypes.string
};

CheckboxInput.defaultProps = {
    checked: false,
    disabled: false
};

export default CheckboxInput;

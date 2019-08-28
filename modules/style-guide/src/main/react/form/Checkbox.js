// @flow

import * as React from "react";
import CheckboxInput from "./CheckboxInput";
import PropTypes from "prop-types";
import classNames from "classnames";

type Props = {
    children?: React.Node,
    onClick: Function,
    checked: boolean,
    disabled: boolean,
    className?: string,
    trackName?: string
};

const Checkbox = ({ children, onClick, checked, disabled, className, trackName, ...props }: Props) => {
    const labelClasses = {
        "checkbox-label-disabled": disabled,
        "checkbox-label-checked": checked
    };

    return (
        <div className="checkbox">
            <label>
                <CheckboxInput
                    className={classNames("labeled-checkbox", className)}
                    onChange={onClick}
                    checked={checked}
                    disabled={disabled}
                    trackName={trackName}
                    {...props}
                />
                <div className={classNames("checkbox-label", labelClasses)}>{children}</div>
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    className: PropTypes.string,
    trackName: PropTypes.string
};

Checkbox.defaultProps = {
    checked: false,
    disabled: false
};

export default Checkbox;

// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../typography/Icon";
import Input from "./Input";
import { IconNamePropType } from "../../types/typography/IconName";

type Props = {
    icon?: string,
    controlId?: string,
    labelText: string,
    helpText?: string,
    valid?: boolean,
    children: React.Element<*>,
    prefixText?: string,
    className?: string,
    touched: boolean
};

const FormEntry = ({
    icon,
    controlId,
    labelText,
    helpText,
    valid,
    prefixText,
    children,
    className,
    touched,
    ...props
}: Props) => {
    const type = children.type;
    const isInput = type === Input;
    const isChildDisabled = !!children.props.disabled;
    const hasValue = !!children.props.value;
    const isLabelVisible = isChildDisabled || (isInput && hasValue) || !isInput || touched;

    const classes = classNames(
        "form-entry",
        {
            "form-entry-with-icon": !!icon,
            "form-entry-is-valid": valid,
            "form-entry-is-invalid": valid === false,
            "form-entry-is-disabled": isChildDisabled,
            "form-entry-with-prefix-text": !!prefixText
        },
        className
    );

    const labelProps = {};
    if (controlId) {
        labelProps.htmlFor = controlId;
    }

    return (
        <div className={classes} {...props}>
            {icon && <Icon name={icon} className="form-entry-icon" />}

            <div className="form-entry-content">
                {prefixText && <div className="form-entry-prefix-text">{prefixText}</div>}

                <label className={classNames({ on: isLabelVisible })} {...labelProps}>
                    {labelText}
                </label>
                {children}
            </div>

            {helpText && <div className="form-entry-help-text">{helpText}</div>}
        </div>
    );
};

FormEntry.propTypes = {
    icon: IconNamePropType,
    controlId: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    helpText: PropTypes.string,
    valid: PropTypes.bool,
    children: PropTypes.element.isRequired,
    prefixText: PropTypes.string,
    className: PropTypes.string,
    isTouched: PropTypes.bool
};

export default FormEntry;

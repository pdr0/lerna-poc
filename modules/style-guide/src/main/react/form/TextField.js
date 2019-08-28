// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FormEntry from "./FormEntry";
import Input from "./Input";
import { IconNamePropType } from "../../types/typography/IconName";

type Props = {
    icon?: string,
    id: string,
    labelText: string,
    helpText?: string,
    type: "text" | "email" | "password" | "tel" | "number",
    value?: string,
    valid?: boolean,
    prefixText?: string,
    containerClassName?: string,
    touched: boolean,
    trackName?: string,
    trackListeners?: string
};

const TextField = ({
    icon,
    id,
    labelText,
    helpText,
    valid,
    type,
    value,
    prefixText,
    containerClassName,
    touched,
    trackName,
    trackListeners,
    ...inputProps
}: Props) => {
    const containerClasses = classNames("text-field", containerClassName);
    return (
        <FormEntry
            icon={icon}
            controlId={id}
            labelText={labelText}
            helpText={helpText}
            valid={valid}
            prefixText={prefixText}
            className={containerClasses}
            touched={touched}
        >
            <Input
                type={type}
                id={id}
                value={value}
                placeholder={touched ? "" : labelText}
                valid={valid}
                trackName={trackName}
                trackListeners={trackListeners}
                {...inputProps}
            />
        </FormEntry>
    );
};

TextField.propTypes = {
    icon: IconNamePropType,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    helpText: PropTypes.string,
    type: PropTypes.oneOf(["text", "email", "password", "tel", "number"]).isRequired,
    value: PropTypes.string,
    valid: PropTypes.bool,
    prefixText: PropTypes.string,
    containerClassName: PropTypes.string,
    touched: PropTypes.bool,
    trackName: PropTypes.string,
    trackListeners: PropTypes.string
};

TextField.defaultProps = {
    type: "text",
    touched: false
};

export default TextField;

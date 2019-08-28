// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FormEntry from "./FormEntry";
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
    forwardedRef: any,
    containerClassName?: string,
    touched: boolean
};

export default class ResultGeneratorTextField extends React.Component<Props> {
    static defaultProps = {
        type: "text",
        touched: false
    };

    render() {
        const {
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
            forwardedRef,
            ...inputProps
        } = this.props;
        const containerClasses = classNames("result-generator-text-field", containerClassName);
        const validClass = valid !== null && valid !== undefined ? (valid ? "is-valid" : "is-invalid") : "";
        return (
            <FormEntry
                icon={icon}
                controlId={id}
                labelText={touched || value !== "" ? labelText : ""}
                helpText={helpText}
                valid={valid}
                prefixText={prefixText}
                className={containerClasses}
                touched={touched}
            >
                <input
                    {...inputProps}
                    type={type}
                    id={id}
                    value={value}
                    placeholder={touched ? "" : labelText}
                    valid={valid}
                    className={`input ${validClass}`}
                    ref={forwardedRef}
                />
            </FormEntry>
        );
    }
}

ResultGeneratorTextField.propTypes = {
    icon: IconNamePropType,
    id: PropTypes.string.isRequired,
    forwardedRef: PropTypes.object.isRequired,
    labelText: PropTypes.string.isRequired,
    helpText: PropTypes.string,
    type: PropTypes.oneOf(["text", "email", "password", "tel", "number"]).isRequired,
    value: PropTypes.string,
    valid: PropTypes.bool,
    prefixText: PropTypes.string,
    containerClassName: PropTypes.string,
    touched: PropTypes.bool
};

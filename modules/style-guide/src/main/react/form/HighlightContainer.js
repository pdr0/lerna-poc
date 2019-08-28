// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

type Props = {
    valid?: boolean,
    className?: string,
    children: React.Element<*>,
    helpText?: string
};

const HighlightContainer = ({ valid, children, className, helpText, ...props }: Props) => {
    const classes = classNames(
        "highlight-container",
        {
            "highlight-container-is-invalid": valid === false
        },
        className
    );

    return (
        <div className={classes} {...props}>
            <div className="highlight-container-placeholder">{children}</div>
            {helpText && <div className="highlight-container-help-text">{helpText}</div>}
        </div>
    );
};

HighlightContainer.propTypes = {
    helpText: PropTypes.string,
    valid: PropTypes.bool,
    children: PropTypes.element.isRequired,
    className: PropTypes.string
};

export default HighlightContainer;

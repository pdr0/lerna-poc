// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

type CTAType = "primary" | "secondary" | "link";

type Props = {
    /** The body */
    children: React.Node,

    /** Additional styling classes */
    className?: string,

    /** CTA type */
    type: CTAType,

    /** Is the CTA disabled? */
    disabled: boolean,

    /** Tracking name */
    trackName: string,

    /** Padding size configuration */
    smallPadding: boolean
};

const CTA = ({ children, className, type, disabled, trackName, smallPadding, ...props }: Props) => {
    const classes = classNames("cta", `cta-${type}`, className, !!smallPadding ? "cta-padding-small" : "");

    return (
        <button disabled={disabled} className={classes} {...props} data-track-name={trackName}>
            <div className={"cta-transition-container"} data-track-name={trackName}>
                {children}
            </div>
        </button>
    );
};

CTA.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(["primary", "secondary", "link"]).isRequired,
    disabled: PropTypes.bool.isRequired,
    trackName: PropTypes.string,
    smallPadding: PropTypes.bool
};

CTA.defaultProps = {
    disabled: false,
    type: "primary"
};

export default CTA;

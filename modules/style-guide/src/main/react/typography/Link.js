// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import componentCss from "./Link.scss";
import Style from "../technical/Style";
import noop from "lodash.noop";

export type Props = {
    /** Set to 'true' for a small link */
    small?: boolean,

    /** Set to 'true' for a disabled link */
    disabled: boolean,

    /** Set to 'true' for a monochrome link */
    monochrome?: boolean,

    /** The reference to link to */
    href?: string,

    /** The body */
    children: React.Node,

    /** On Click Handler */
    onClickHandler: Event => void,

    /** Additional styling classes. */
    className?: string,

    /** Track name */
    trackName?: string
};

const determineOnClick = (disabled: boolean, onClick: Event => void) => {
    return disabled ? noop : onClick;
};

/**
 * Is displaying a link.
 *
 * Please note: "onClickHandler" is suffixed with "Handler" to make sure it's not simply added as an attribute to the outer most DOM element of this component.
 * I.e. this component contains some logic that deals with onClickHandler.
 */
const Link = ({
    small,
    disabled,
    monochrome,
    href,
    children,
    className,
    onClickHandler,
    trackName,
    ...props
}: Props) => {
    const tagClasses = classNames({ disabled }, { small }, { monochrome }, "link");
    const outerClasses = classNames(className);
    const Tag = href ? "a" : "span";
    const realHref = disabled ? undefined : href;
    return (
        <span className={outerClasses}>
            <Style css={componentCss} />
            <Tag
                className={tagClasses}
                onClick={determineOnClick(disabled, onClickHandler)}
                {...props}
                href={realHref}
                data-track-name={trackName}
            >
                {children}
            </Tag>
        </span>
    );
};

Link.propTypes = {
    small: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClickHandler: PropTypes.func.isRequired,
    trackName: PropTypes.string
};

Link.defaultProps = {
    small: false,
    disabled: false,
    monochrome: false,
    href: undefined,
    onClickHandler: noop,
    trackName: ""
};

export default Link;

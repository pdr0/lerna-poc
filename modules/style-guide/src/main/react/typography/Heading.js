// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import type { HeadingSize } from "../../types/typography/HeadingSize";
import { HeadingSizePropType } from "../../types/typography/HeadingSize";
import componentCss from "./Heading.scss";
import Style from "../technical/Style";

type Props = {
    /** The desired size. Values from h1-h8 possible */
    size: HeadingSize,

    /** Children / content to render */
    children?: React.Node,

    /** Possibility to add class as string */
    className?: string
};

/**
 * Is displaying a headline.
 */
const Heading = ({ size, children, className, ...props }: Props) => {
    const classes = classNames(size, className);
    return (
        <div className={classes} {...props}>
            <Style css={componentCss} />
            {children}
        </div>
    );
};

Heading.propTypes = {
    size: HeadingSizePropType.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
};

export default Heading;

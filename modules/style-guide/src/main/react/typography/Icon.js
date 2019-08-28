// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import type { IconName } from "../../types/typography/IconName";
import { IconNamePropType } from "../../types/typography/IconName";

type Props = {
    /** The name of the icon. */
    name: IconName,
    /** Additional styling classes. */
    className?: string
};

/**
 * Is displaying an icon.
 */
const Icon = ({ className, name, ...props }: Props) => {
    const classes = classNames("icon", `icon-${name}`, className);

    return <i className={classes} {...props} />;
};

Icon.propTypes = {
    name: IconNamePropType.isRequired,
    className: PropTypes.string
};

export default Icon;

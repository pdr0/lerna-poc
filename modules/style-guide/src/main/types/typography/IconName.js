// @flow

import PropTypes from "prop-types";
import * as Icons from "../../constants/Icons";

// todo: allow only exactly the icon names.
export type IconName = string;
export const IconNamePropType = PropTypes.oneOf(Object.values(Icons));

// @flow

import PropTypes from "prop-types";

export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8";

export const HeadingSizePropType = PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"]);

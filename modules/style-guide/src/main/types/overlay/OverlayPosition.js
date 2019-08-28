// @flow

import PropTypes from "prop-types";

export type OverlayPosition = "top" | "right" | "bottom" | "left";

export const OverlayPositionPropType = PropTypes.oneOf(["top", "right", "bottom", "left"]);

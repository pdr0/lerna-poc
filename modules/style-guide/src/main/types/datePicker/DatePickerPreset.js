// @flow
import type Moment from "moment";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import type { Node } from "react";

export type DatePickerPreset = {
    id: number,
    name: Node,
    startDate: Moment,
    endDate: Moment
};

export const datePickerPresetPropType = PropTypes.shape({
    name: PropTypes.node.isRequired,
    startDate: momentPropTypes.momentObj.isRequired,
    endDate: momentPropTypes.momentObj.isRequired
});

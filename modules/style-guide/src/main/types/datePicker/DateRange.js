// @flow

import type Moment from "moment";
import momentPropTypes from "react-moment-proptypes";
import PropTypes from "prop-types";

export type DateRange = {
    startDate: Moment | null,
    endDate: Moment | null
};

export const dateRangePropType = PropTypes.shape({
    startDate: momentPropTypes.momentObj,
    endDate: momentPropTypes.momentObj
});

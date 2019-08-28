// @flow
import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

type TabSeparatorProps = {
    className?: string
};
export const TabSeparator = (props: TabSeparatorProps) => {
    return <div className={classNames("l-tabs-separator", props.className)} />;
};

TabSeparator.propTypes = {
    className: PropTypes.string
};

TabSeparator.displayName = "TabSeparator";

export default TabSeparator;

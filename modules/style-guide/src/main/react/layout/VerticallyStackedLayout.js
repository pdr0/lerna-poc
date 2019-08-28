// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Style from "../technical/Style";
import componentCss from "./VerticallyStackedLayout.scss";

export type Props = {
    children: React.Node,
    className?: string,
    size: "small" | "medium" | "large"
};

const VerticallyStackedLayout = (props: Props) => (
    <div className={classNames("vertically-stacked-layout-container", props.size)}>
        <Style css={componentCss} />
        {props.children}
    </div>
);

VerticallyStackedLayout.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired
};

VerticallyStackedLayout.defaultProps = {
    size: "small"
};

export default VerticallyStackedLayout;

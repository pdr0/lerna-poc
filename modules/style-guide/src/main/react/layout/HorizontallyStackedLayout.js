// @flow

import * as React from "react";
import componentCss from "./HorizontallyStackedLayout.scss";
import classNames from "classnames";
import Style from "../technical/Style";

type Props = {
    children: React.Node,
    className?: string
};

const HorizontallyStackedLayout = (props: Props) => (
    <div className={classNames("horizontally-stacked-layout", props.className)}>
        <Style css={componentCss} />
        {props.children}
    </div>
);

export default HorizontallyStackedLayout;

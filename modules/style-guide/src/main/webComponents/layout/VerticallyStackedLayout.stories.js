// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "./VerticallyStackedLayout";
import { asReactComponent } from "../WebComponentToReactAdapter";
import type { Props as VerticallyStackedLayoutProps } from "../../react/layout/VerticallyStackedLayout";
import VerticallyStackedLayout from "../../react/layout/VerticallyStackedLayout";

const ReactVerticallyStackedLayout: React.ComponentType<VerticallyStackedLayoutProps> = asReactComponent(
    "ll-VerticallyStackedLayout",
    VerticallyStackedLayout.defaultProps
);

const grey = "#F2F4F2";
const red = "#f00";

const containerStyling = { backgroundColor: grey };

const boxStyling = {
    width: "100px",
    height: "100px",
    backgroundColor: red
};

storiesOf("Web Components/Deprecated/ll-VerticallyStackedLayout", module)
    .addDecorator(withInfo)
    .add("default small", () => (
        <div style={containerStyling}>
            <ReactVerticallyStackedLayout size={"small"}>
                <div style={boxStyling} />
                <div style={boxStyling} />
                <div style={boxStyling} />
            </ReactVerticallyStackedLayout>
        </div>
    ))
    .add("medium", () => (
        <div style={containerStyling}>
            <ReactVerticallyStackedLayout size={"medium"}>
                <div style={boxStyling} />
                <div style={boxStyling} />
                <div style={boxStyling} />
            </ReactVerticallyStackedLayout>
        </div>
    ))
    .add("large", () => (
        <div style={containerStyling}>
            <ReactVerticallyStackedLayout size={"large"}>
                <div style={boxStyling} />
                <div style={boxStyling} />
                <div style={boxStyling} />
            </ReactVerticallyStackedLayout>
        </div>
    ));

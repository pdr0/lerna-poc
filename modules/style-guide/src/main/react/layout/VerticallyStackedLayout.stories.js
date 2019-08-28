// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import VerticallyStackedLayout from "./VerticallyStackedLayout";

storiesOf("VerticallyStackedLayout", module)
    .add(
        "default small",
        withInfo()(() => {
            const grey = "#F2F4F2";
            const red = "#f00";

            const containerStyling = {
                backgroundColor: grey
            };

            const boxStyling = {
                width: "100px",
                height: "100px",
                backgroundColor: red
            };

            return (
                <div style={containerStyling}>
                    <VerticallyStackedLayout size="small">
                        <div style={boxStyling} />
                        <div style={boxStyling} />
                        <div style={boxStyling} />
                    </VerticallyStackedLayout>
                </div>
            );
        })
    )
    .add(
        "medium",
        withInfo()(() => {
            const grey = "#F2F4F2";
            const red = "#f00";

            const containerStyling = { backgroundColor: grey };

            const boxStyling = {
                width: "100px",
                height: "100px",
                backgroundColor: red
            };

            return (
                <div style={containerStyling}>
                    <VerticallyStackedLayout size="medium">
                        <div style={boxStyling} />
                        <div style={boxStyling} />
                        <div style={boxStyling} />
                    </VerticallyStackedLayout>
                </div>
            );
        })
    )
    .add(
        "large",
        withInfo()(() => {
            const grey = "#F2F4F2";
            const red = "#f00";

            const containerStyling = { backgroundColor: grey };

            const boxStyling = {
                width: "100px",
                height: "100px",
                backgroundColor: red
            };

            return (
                <div style={containerStyling}>
                    <VerticallyStackedLayout size="large">
                        <div style={boxStyling} />
                        <div style={boxStyling} />
                        <div style={boxStyling} />
                    </VerticallyStackedLayout>
                </div>
            );
        })
    );

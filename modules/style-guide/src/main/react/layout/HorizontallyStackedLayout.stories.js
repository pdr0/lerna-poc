// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import HorizontallyStackedLayout from "./HorizontallyStackedLayout";

storiesOf("HorizontallyStackedLayout", module)
    .add(
        "default",
        withInfo()(() => {
            const grey = "#F2F4F2";
            const green = "#A5CD28";

            const containerStyling = { backgroundColor: grey };

            const boxStyling = {
                width: "100px",
                height: "100px",
                backgroundColor: green
            };

            return (
                <div style={containerStyling}>
                    <HorizontallyStackedLayout>
                        <div style={boxStyling} />
                        <div style={boxStyling} />
                    </HorizontallyStackedLayout>
                </div>
            );
        })
    )
    .add(
        "pushed element",
        withInfo()(() => {
            const grey = "#F2F4F2";
            const green = "#A5CD28";

            const containerStyling = { backgroundColor: grey };

            const boxStyling = {
                width: "100px",
                height: "100px",
                backgroundColor: green
            };

            return (
                <div style={containerStyling}>
                    <HorizontallyStackedLayout>
                        <div style={boxStyling} />
                        <div style={boxStyling} />
                        <div style={boxStyling} className={"push"} />
                    </HorizontallyStackedLayout>
                </div>
            );
        })
    );

// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, withKnobs } from "@storybook/addon-knobs/react";
import "./Tooltip";
import { createReactComponent } from "../createReactComponent";

const Tooltip = createReactComponent("ll-tooltip");

storiesOf("Web Components/Tooltip", module)
    .addDecorator(withKnobs)
    .add("Tooltip", () => {
        return (
            <React.Fragment>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <span style={{ display: "inline-block", width: "300px" }}></span>
                <Tooltip
                    position={select(
                        "Position",
                        { "Top right": "top-right", "Bottom right": "bottom-right" },
                        "top-right"
                    )}
                    style={{ "--icon-color": text("Icon color", "") }}
                >
                    1 Tippfield 1.00EUR
                    <br />
                    1 Tippfield 1.00EUR
                    <br />
                    1 Tippfield 1.00EUR
                    <br />1 Tippfield 1.00EUR
                </Tooltip>
            </React.Fragment>
        );
    });

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { createReactComponent } from "../createReactComponent";
import "./Dropdown";

const Dropdown = createReactComponent("ll-lottery-dropdown");

const drawValues = ["0-1", "2-3", "4-5", "6-7", "8-9"];
const divStyle = {
    width: "100%"
};

const divSmall = {
    width: "120px"
};

storiesOf("Web Components/Dropdown", module)
    // Pass all diferent possibilities (provide all possible examples)
    .addDecorator(withInfo)
    .add("Mobile & Desktop", () => {
        return (
            <React.Fragment>
                <div style={divStyle}>
                    <Dropdown key="first-draw" name="someName" defaultOption={"Choose"} trackName="specific-draw-rainbow-jackpot" values={drawValues} />
                </div>

                <div style={divSmall}>
                    <Dropdown key="first-draw" defaultOption={"Choose"} trackName="specific-draw-rainbow-jackpot" values={drawValues} />
                </div>
            </React.Fragment>
        );
    })
    .add("disabled", () => {
        return (
            <React.Fragment>
                <div style={divStyle}>
                    <Dropdown
                        key="first-draw"
                        defaultOption={"Choose"}
                        trackName="specific-draw-rainbow-jackpot"
                        values={drawValues}
                        disabled={true}
                    />
                </div>

                <div style={divSmall}>
                    <Dropdown
                        key="first-draw"
                        defaultOption={"Choose"}
                        trackName="specific-draw-rainbow-jackpot"
                        values={drawValues}
                        disabled={true}
                    />
                </div>
            </React.Fragment>
        );
    })
    .add("preselected", () => {
        return (
            <React.Fragment>
                <div style={divStyle}>
                    <Dropdown key="first-draw" defaultOption={"Choose"} values={drawValues} value={drawValues[2]} />
                </div>

                <div style={divSmall}>
                    <Dropdown key="first-draw" defaultOption={"Choose"} values={drawValues} value={drawValues[2]} />
                </div>
            </React.Fragment>
        );
    }).add("0-9", () => {
        return (
            <React.Fragment>
                <div style={divStyle}>
                    <Dropdown key="first-draw" defaultOption={"Choose"} values={["0-9"]} required={true} />
                </div>
                <div style={divSmall}>
                    <Dropdown key="first-draw" defaultOption={"Choose"} values={["0-9"]} required={true} />
                </div>
            </React.Fragment>
        );
    }).add("is required", () => {
        return (
            <React.Fragment>
                <div style={divStyle}>
                    <Dropdown key="first-draw" defaultOption={"Choose"} values={drawValues} required={true} />
                </div>
                <div style={divSmall}>
                    <Dropdown key="first-draw" defaultOption={"Choose"} values={drawValues} required={true} />
                </div>
            </React.Fragment>
        );
    });

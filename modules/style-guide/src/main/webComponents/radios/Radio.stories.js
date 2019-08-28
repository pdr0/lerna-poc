// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { decorate } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs/react";
import "./RadioAlt";
import "./RadioGroup";
import { createReactComponent } from "../createReactComponent";

const Radio = createReactComponent("ll-radio-alt");
const RadioGroup = createReactComponent("ll-radio-group");

const detail = decorate([args => [args[0].detail]]);

storiesOf("Web Components/Radio", module)
    .addDecorator(withKnobs)
    .add("ll-radio-alt", () => {
        return (
            <React.Fragment>
                <Radio value="test">Miss</Radio>
                <br />
                <br />
                <Radio value="test" checked={true}>
                    Miss
                </Radio>{" "}
                Selected
            </React.Fragment>
        );
    })
    .add("ll-radio-group", () => {
        const textRadio1 = text("Text radio 1", "£10");
        const textRadio2 = text("Text radio 2", "£20");
        const textRadio3 = text("Text radio 3", "£50");
        return (
            <RadioGroup onChange={detail.action("radio changed")} style={{ width: "320px" }}>
                <Radio value="1000" checked={true}>
                    {textRadio1}
                </Radio>
                <Radio value="2000">{textRadio2}</Radio>
                <Radio value="5000">{textRadio3}</Radio>
            </RadioGroup>
        );
    });

// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import "./Checkbox";

storiesOf("Web Components/Checkbox", module)
    .addDecorator(withKnobs)
    .add("default", () => {
        return (
            <React.Fragment>
                <h4>Simple checkbox</h4>
                <ll-checkbox>Label</ll-checkbox>
                <h4>Checkbox with complex label</h4>
                <ll-checkbox checked>
                    Ich bin über 18 Jahre alt und akzeptiere die <a href="">AGB</a>, die{" "}
                    <a href="">Datenschutzerklärung</a> und eine <a href="">Altersüberprüfung</a>.
                </ll-checkbox>
                <h4>Disabled</h4>
                <ll-checkbox disabled>Label</ll-checkbox>
                <h4>Disabled and selected</h4>
                <ll-checkbox disabled checked>
                    Label
                </ll-checkbox>
            </React.Fragment>
        );
    });

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import "./ButtonRound";
import "./ButtonRoundClose";
import "../controls/ControlMinus";
import "../controls/ControlPlus";

storiesOf("Web Components/Controls + Button Round", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        return (
            <React.Fragment>
                    <h2>Plus + Minus Controls</h2>
                    <ll-control-plus />
                    <br />
                    <ll-control-minus />
                    <br /><br />

                    <h2>Close button</h2>
                    <ll-button-round-close />
                    <br /><br />

                    <h2>QuickPick button</h2>
                    <ll-button-round type="quickPick" />
                    <br /><br />

                    <h2>Delete button</h2>
                    <ll-button-round type="delete" />
                    <br /><br />

                    <h2>Edit button</h2>
                    <ll-button-round type="edit" />
                    <br /><br />
            </React.Fragment>
        );
    });

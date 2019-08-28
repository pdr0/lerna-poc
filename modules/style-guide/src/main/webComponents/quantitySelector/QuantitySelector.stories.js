import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {text, withKnobs} from "@storybook/addon-knobs/react";
import "./QuantitySelector";

storiesOf("Web Components/QuantitySelector", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        const max = text("Max value", "1000000");
        const min = text("Min value", "1");

        return (
            <React.Fragment>
                <ll-quantity-selector max={max} min={min} />
            </React.Fragment>
        );
    });

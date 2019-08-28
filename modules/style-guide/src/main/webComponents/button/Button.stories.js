// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs/react";
import "./Button";
import { createReactComponent } from "../createReactComponent";

const Button = createReactComponent("ll-button");
const eventsFromObject = actions({ onClick: "onClick" });

const buttonSizes = {
    "extra-small": "extra-small",
    small: "small",
    normal: "normal",
    large: "large"
};

const buttonTypes = {
    primary: "primary",
    secondary: "secondary"
};

const cartButtonTypes = {
    primary: "primarycart",
    secondary: "secondarycart"
};

storiesOf("Web Components/Button", module)
    .addDecorator(withKnobs)
    .add("Basic", () => (
        <Button
            {...eventsFromObject}
            disabled={boolean("Disabled", false)}
            style={{ width: text("width", "") }}
            type={select("Type", buttonTypes, "primary")}
            size={select("Size", buttonSizes, "normal")}
        >
            {text("Value", "button")}
        </Button>
    ))
    .add("Basic link", () => (
        <Button
            {...eventsFromObject}
            disabled={boolean("Disabled", false)}
            style={{ width: text("width", "") }}
            type={select("Type", buttonTypes, "primary")}
            size={select("Size", buttonSizes, "normal")}
            href={text("href", "https://www.lottoland.com/en/")}
        >
            {text("Value", "button")}
        </Button>
    )).add("Basic Shopping Cart Button", () => (
        <Button
            {...eventsFromObject}
            style={{ width: text("width", "") }}
            type={select("Type", cartButtonTypes, "primarycart")}
        >
            {text("Value", "button")}
        </Button>
    )).add("Secondary Shopping Cart Button", () => (
        <Button
            {...eventsFromObject}
            style={{ width: text("width", "") }}
            href={text("href", "https://www.lottoland.com/en/shoppingcart?tickets=clear,EMV50000100000000000000000000000000000000000000&amp;dyj=true&amp;trck5=quickpick_en_mobile.euroMillions.6.games")}
            type="primarycart"
        >
            {text("Value", "ONLY £12.00")}
            <span slot="secondary">{text("Top label", "6 QuickPicks")}</span>
        </Button>
    ));

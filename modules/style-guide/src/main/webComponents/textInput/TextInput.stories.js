// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { select, text, withKnobs } from "@storybook/addon-knobs/react";
import "./TextInput";
import "../typography/Typography";
import { createReactComponent } from "../createReactComponent";

const TextInput = createReactComponent("ll-text-input");
const eventsFromObject = actions({ onChange: "onChange", onFocus: "onFocus", onInput: "onInput", onBlur: "onBlur" });

storiesOf("Web Components/TextInput", module)
    .addDecorator(withKnobs)
    .add("Basic", () => (
        <TextInput
            {...eventsFromObject}
            value={text("Value", "")}
            label={text("Label", "First Name")}
            inlineLabel={text("Inline label", "")}
            validInlineLabel={text("Valid inline label")}
            invalidInlineLabel={text("Invalid inline label")}
            status={select("Status", { valid: "valid", invalid: "invalid", default: "default" }, "default")}
            style={{ width: text("width", "200px") }}
        />
    ))
    .add("Complete", () => (
        <TextInput
            {...eventsFromObject}
            value={text("Value", "Marcus")}
            label={text("Label", "First name")}
            inlinelabel={text("Inline label", "inline label")}
            status="default"
            style={{ width: "200px" }}
        />
    ))
    .add("Valid", () => (
        <TextInput
            {...eventsFromObject}
            value={text("Value", "result@example.com")}
            label={text("Label", "email")}
            validInlineLabel={text("Valid inline label", "Looks good!")}
            status="valid"
            style={{ width: "200px" }}
        />
    ))
    .add("Invalid", () => (
        <TextInput
            {...eventsFromObject}
            value={text("Value", "result@example")}
            label={text("Label", "email")}
            invalidInlineLabel={text("Invalid inline label", "Not a valid email address.")}
            status="invalid"
            style={{ width: "200px" }}
        />
    ))
    .add("Prefix", () => (
        <TextInput
            {...eventsFromObject}
            value={text("Value", "")}
            label={text("Label", "Custom amount")}
            inlineLabel={text("Inline label", "")}
            validInlineLabel={text("Valid inline label")}
            invalidInlineLabel={text("Invalid inline label")}
            status={select("Status", { valid: "valid", invalid: "invalid", default: "default" }, "default")}
            style={{ width: "200px" }}
        >
            <ll-typography size="sp" slot="prefix">
                {text("Prefix", "£")}
            </ll-typography>
        </TextInput>
    ))
    .add("Suffix", () => (
        <TextInput
            {...eventsFromObject}
            value={text("Value", "")}
            label={text("Label", "Custom amount")}
            inlineLabel={text("Inline label", "")}
            validInlineLabel={text("Valid inline label")}
            invalidInlineLabel={text("Invalid inline label")}
            status={select("Status", { valid: "valid", invalid: "invalid", default: "default" }, "default")}
            style={{ width: "200px" }}
        >
            <ll-typography size="sp" slot="suffix">
                {text("Suffix", "EUR")}
            </ll-typography>
        </TextInput>
    ));

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Dropdown from "./Dropdown";
import { withState } from "@dump247/storybook-state";

let options = [
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "red", label: "Red" }
];

const dropdownComponent = store => (
    <Dropdown
        name="color"
        options={options}
        value={store.state.value}
        isValid={store.state.isValid}
        disabled={store.state.disabled}
        onChange={event => store.set({ value: event.target.value })}
        emptyOption={store.state.emptyOption}
    />
);

storiesOf("Dropdown", module)
    .add("default", withInfo()(withState({}, dropdownComponent)))
    .add("disabled", withInfo()(withState({ disabled: true }, dropdownComponent)))
    .add(
        "with empty option",
        withInfo()(withState({ emptyOption: { label: "Please select…", value: "" } }, dropdownComponent))
    )
    .add(
        "with disabled empty option",
        withInfo()(
            withState({ emptyOption: { label: "Please select…", value: "", disabled: true } }, dropdownComponent)
        )
    )
    .add("preselected", withInfo()(withState({ value: "red" }, dropdownComponent)))
    .add(
        "preselected with empty option",
        withInfo()(withState({ value: "red", emptyOption: { label: "Please select…", value: "" } }, dropdownComponent))
    )
    .add("is valid", withInfo()(withState({ isValid: true }, dropdownComponent)))
    .add("is invalid", withInfo()(withState({ isValid: false }, dropdownComponent)));

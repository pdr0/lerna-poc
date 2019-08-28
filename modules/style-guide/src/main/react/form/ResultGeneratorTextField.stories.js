// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
import * as icons from "../../constants/Icons";
import ResultGeneratorTextField from "./ResultGeneratorTextField";

storiesOf("ResultGeneratorTextField", module)
    .add(
        "default",
        withInfo()(
            withState({ value: "" }, store => (
                <ResultGeneratorTextField
                    id="input"
                    labelText="Label"
                    value={store.state.value}
                    onChange={event => store.set({ value: event.target.value })}
                    touched={store.state.touched}
                    onClick={event => store.set({ touched: true })}
                    onBlur={event => store.set({ touched: false })}
                />
            ))
        )
    )
    .add(
        "with help text",
        withInfo()(
            withState({ value: "", touched: false }, store => (
                <ResultGeneratorTextField
                    id="input"
                    labelText="Label"
                    helpText="Help text."
                    value={store.state.value}
                    onChange={event => store.set({ value: event.target.value })}
                    touched={store.state.touched}
                    onClick={event => store.set({ touched: true })}
                    onBlur={event => store.set({ touched: false })}
                />
            ))
        )
    )
    .add(
        "with icon",
        withInfo()(
            withState({ value: "test" }, store => (
                <ResultGeneratorTextField
                    icon={icons.User2}
                    id="input"
                    labelText="Label"
                    value={store.state.value}
                    onChange={event => store.set({ value: event.target.value })}
                    touched={store.state.touched}
                    onClick={event => store.set({ touched: true })}
                    onBlur={event => store.set({ touched: false })}
                />
            ))
        )
    )
    .add(
        "valid",
        withInfo()(
            withState({ value: "test" }, store => (
                <ResultGeneratorTextField
                    id="input"
                    labelText="Label"
                    valid
                    value={store.state.value}
                    onChange={event => store.set({ value: event.target.value })}
                    touched={store.state.touched}
                    onClick={event => store.set({ touched: true })}
                    onBlur={event => store.set({ touched: false })}
                />
            ))
        )
    )
    .add(
        "invalid",
        withInfo()(
            withState({ value: "test" }, store => (
                <ResultGeneratorTextField
                    id="input"
                    labelText="Label"
                    helpText="Some error message."
                    valid={false}
                    value={store.state.value}
                    onChange={event => store.set({ value: event.target.value })}
                    touched={store.state.touched}
                    onClick={event => store.set({ touched: true })}
                    onBlur={event => store.set({ touched: false })}
                />
            ))
        )
    )
    .add(
        "password",
        withInfo()(
            withState({ value: "test" }, store => (
                <ResultGeneratorTextField
                    id="input"
                    type="password"
                    labelText="Password"
                    value={store.state.value}
                    onChange={event => store.set({ value: event.target.value })}
                    touched={store.state.touched}
                    onClick={event => store.set({ touched: true })}
                    onBlur={event => store.set({ touched: false })}
                />
            ))
        )
    )
    .add(
        "mobile with prefix",
        withInfo()(
            withState({ value: "test" }, store => (
                <ResultGeneratorTextField
                    id="input"
                    type="text"
                    labelText="Mobile number"
                    prefixText="+27"
                    value={store.state.value}
                    onChange={event => store.set({ value: event.target.value })}
                    touched={store.state.touched}
                    onClick={event => store.set({ touched: true })}
                    onBlur={event => store.set({ touched: false })}
                />
            ))
        )
    )
    .add(
        "email",
        withInfo()(
            withState({ value: "test@dreamit.de" }, store => (
                <ResultGeneratorTextField
                    id="input"
                    type="email"
                    labelText="E-Mail"
                    value={store.state.value}
                    onChange={event => store.set({ value: event.target.value })}
                    touched={store.state.touched}
                    onClick={event => store.set({ touched: true })}
                    onBlur={event => store.set({ touched: false })}
                />
            ))
        )
    );

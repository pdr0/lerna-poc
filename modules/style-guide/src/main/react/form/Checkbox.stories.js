// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Checkbox from "./Checkbox";
import { withState } from "@dump247/storybook-state";
import noop from "lodash.noop";

storiesOf("Checkbox", module)
    .add(
        "default with simple label",
        withInfo()(
            withState({ checked: false }, store => {
                return (
                    <Checkbox checked={store.state.checked} onClick={e => store.set({ checked: e.target.checked })}>
                        Label
                    </Checkbox>
                );
            })
        )
    )
    .add(
        "default with complex label",
        withInfo()(
            withState({ checked: false }, store => {
                return (
                    <Checkbox checked={store.state.checked} onClick={e => store.set({ checked: e.target.checked })}>
                        Ich bin über 18 Jahre alt und akzeptiere die <a href="">AGB</a>, die{" "}
                        <a href="">Datenschutzerklärung</a> und eine <a href="">Altersüberprüfung</a>.
                    </Checkbox>
                );
            })
        )
    )
    .add(
        "disabled",
        withInfo()(() => (
            <Checkbox onClick={noop} disabled>
                Disabled checkbox
            </Checkbox>
        ))
    )
    .add(
        "disabled and selected",
        withInfo()(() => (
            <Checkbox onClick={noop} disabled checked>
                Disabled and selected checkbox
            </Checkbox>
        ))
    );

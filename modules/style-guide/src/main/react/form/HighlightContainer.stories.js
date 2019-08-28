// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Checkbox from "./Checkbox";
import HighlightContainer from "./HighlightContainer";
import { withState } from "@dump247/storybook-state";

storiesOf("HighlightContainer", module).add(
    "with checkbox",
    withInfo()(
        withState({ valid: true, checked: false, helpText: "" }, store => {
            return (
                <HighlightContainer valid={store.state.valid} helpText={store.state.helpText}>
                    <Checkbox
                        checked={store.state.checked}
                        onClick={e =>
                            store.set({
                                checked: e.target.checked,
                                valid: e.target.checked,
                                helpText: e.target.checked ? "" : "Not valid"
                            })
                        }
                    >
                        Ich bin über 18 Jahre alt und akzeptiere die <a href="">AGB</a>, die{" "}
                        <a href="">Datenschutzerklärung</a> und eine <a href="">Altersüberprüfung</a>.
                    </Checkbox>
                </HighlightContainer>
            );
        })
    )
);

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
import Overlay from "./Overlay";

const overlayWithToggle = store => (
    <div style={{ height: 400, width: "100%", position: "relative", textAlign: "center" }}>
        <span
            onClick={() => store.set({ displayed: !store.state.displayed })}
            style={{ position: "absolute", top: "50%" }}
        >
            <b style={{ padding: 10 }}>Toggle overlay</b>
            <Overlay
                displayed={store.state.displayed}
                middle={store.state.middle}
                center={store.state.center}
                style={{ width: 200 }}
                position={store.state.position}
            >
                Cool overlay
            </Overlay>
        </span>
    </div>
);

storiesOf("Overlay", module)
    .add(
        "top",
        withInfo()(withState({ displayed: true, position: "top", middle: false, center: true }, overlayWithToggle))
    )
    .add(
        "right",
        withInfo()(withState({ displayed: true, position: "right", middle: true, center: false }, overlayWithToggle))
    )
    .add(
        "bottom",
        withInfo()(withState({ displayed: true, position: "bottom", middle: false, center: true }, overlayWithToggle))
    )
    .add(
        "left",
        withInfo()(withState({ displayed: true, position: "left", middle: true, center: false }, overlayWithToggle))
    );

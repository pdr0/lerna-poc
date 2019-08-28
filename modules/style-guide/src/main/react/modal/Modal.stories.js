import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withState } from "@dump247/storybook-state";
import Modal from "./Modal";

const overlayWithToggle = store => (
    <div style={{ height: 400, width: "100%", position: "relative", textAlign: "center" }}>
        <span
            onClick={() => store.set({ displayed: !store.state.displayed })}
            style={{ position: "absolute", top: "50%" }}
        >
            <b style={{ padding: 10 }}>Toggle modal</b>
        </span>
        <Modal displayed={store.state.displayed} onClose={() => store.set({ displayed: false })}>
            Cool modal
        </Modal>
    </div>
);

storiesOf("Modal", module).add("default", withInfo()(withState({ displayed: true }, overlayWithToggle)));

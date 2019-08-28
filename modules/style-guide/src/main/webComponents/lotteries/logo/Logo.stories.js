import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "./Logo";

storiesOf("Web Components/Lottery Logo", module)
    .addDecorator(withInfo)
    .add("default", () => {
        return (
            <React.Fragment>
                <h1>Case of responsive image</h1>
                <ll-lottery-logo lottery="euroMillions" locale="http://localhost:8080" responsiveSize={true} />
                <h1>Case of fixed size for image</h1>
                <ll-lottery-logo lottery="powerBall" width="50" height="50" />
            </React.Fragment>
        );
    });

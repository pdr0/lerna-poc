import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs/react";
import "./Callout";
import "../../webComponents/lotteries/logo/Logo";

storiesOf("Web Components / Callout", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        const title = text("Title", "Special Jackpot");

        return (
            <React.Fragment>
                <h1>Examples</h1>
                <ll-callout text={title}>
                    <div style={{backgroundColor: "grey", width: "200px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <span style={{color: "white", fontSize: "17px"}}>EXAMPLE CONTAINER</span>
                    </div>
                </ll-callout>
                <br />
                <ll-callout text={title}>
                    <ll-lottery-logo lottery="euroMillions" locale="http://localhost:8080" responsiveSize={true}></ll-lottery-logo>
                </ll-callout>
            </React.Fragment>
        );
    });

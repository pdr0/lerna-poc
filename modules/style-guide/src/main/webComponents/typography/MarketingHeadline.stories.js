import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs/react";
import "../../webComponents/typography/MarketingHeadline";
import "../../webComponents/typography/Typography";

storiesOf("Marketing Headline", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        const title = text("Title", "Bolão Virtual - Como funciona?");
        return (
            <React.Fragment>
                <ll-marketing-headline>
                    <ll-typography size="h4">{title}</ll-typography>
                </ll-marketing-headline>

                <div style={{ textAlign: "center" }}>
                    <ll-marketing-headline>
                        <ll-typography size="h4">{title}</ll-typography>
                    </ll-marketing-headline>
                </div>

                <div style={{ textAlign: "right" }}>
                    <ll-marketing-headline>
                        <ll-typography size="h4">{title}</ll-typography>
                    </ll-marketing-headline>
                </div>
            </React.Fragment>
        );
    });

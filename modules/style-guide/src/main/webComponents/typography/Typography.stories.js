import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../../webComponents/typography/Typography";

storiesOf("Web Components/Typography", module)
    .addDecorator(withInfo)
    .add("default", () => {
        return (
            <React.Fragment>
                <ll-typography size="h1">I'm a cool heading 1!</ll-typography>
                <ll-typography size="h2">I'm a cool heading 2!</ll-typography>
                <ll-typography size="h3">I'm a cool heading 3!</ll-typography>
                <ll-typography size="h4">I'm a cool heading 4!</ll-typography>
                <ll-typography size="h5">I'm a cool heading 5!</ll-typography>
                <ll-typography size="h6">I'm a cool heading 6!</ll-typography>
                <ll-typography size="h7">I'm a cool heading 7!</ll-typography>
                <ll-typography size="h8">I'm a cool heading 8!</ll-typography>
                <ll-typography size="p">I'm a cool paragraph!</ll-typography>
                <ll-typography size="sp">I'm a cool small paragraph!</ll-typography>
                <ll-typography size="callout">I'm a cool callout!</ll-typography>
            </React.Fragment>
        );
    });

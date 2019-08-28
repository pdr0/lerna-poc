import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs/react";
import "../../webComponents/numberInput/NumberInput";

storiesOf("Web Components/NumberInput", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        return (
            <React.Fragment>
                <h4>Between 9 and 70</h4>
                <ll-number-input min={9} max={70}/>
                <br/><br/>
                <h4>Single digit</h4>
                <ll-number-input min={0} max={9} />
                <br/><br/>
                <h4>Single digit && required</h4>
                <ll-number-input min={0} max={9} required="true"/>
                <br/><br/>
                <h4>Without params</h4>
                <ll-number-input />
                <br/><br/>
                <h4>Min > Max</h4>
                <ll-number-input min={10} max={9}/>
                <br/><br/>
                <h4>Value > max</h4>
                <ll-number-input max={10} value={11}/>
                <br/><br/>
                <h4>Value &lt; min</h4>
                <ll-number-input min={10} value={9}/>
                <br/><br/>
                <h4>required</h4>
                <ll-number-input required="true" />
                <br/><br/>
                <h4>Value > max && required</h4>
                <ll-number-input  max={100} min={1} value={500} required="true" />
                <br/><br/>
            </React.Fragment>
        );
    });

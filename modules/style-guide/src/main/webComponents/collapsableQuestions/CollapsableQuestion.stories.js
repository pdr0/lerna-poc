import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "./CollapsableQuestion";
import "../icon/Icon";

storiesOf("Web Components/Collapsable Questions/Element", module)
    .addDecorator(withInfo)
    .add("default", () => {
        return (
            <React.Fragment>
                <h1>Example collapsed</h1>
                <ll-collapsable-question collapsed={true}>
                    <ll-icon size="extra-large" name="scissor" class="ll-margin-md-bottom" slot="icon" />
                    <span slot="title" className="ll-margin-sm-bottom">
                        100 chances de ganhar!
                    </span>
                    <div slot="description" className="ll-margin-sm-bottom">
                        São 2 jogos de 10 dezenas combinadas - fechando Quina (caso acerte 5 dezenas). Incríveis 100
                        chances de levar o grande prêmio!
                    </div>
                </ll-collapsable-question>

                <h1>Example expanded</h1>
                <ll-collapsable-question>
                    <ll-icon size="extra-large" name="question-mark" class="ll-margin-md-bottom" slot="icon" />
                    <span slot="title" className="ll-margin-sm-bottom">
                        100 chances de ganhar!
                    </span>
                    <div slot="description" className="ll-margin-sm-bottom">
                        São 2 jogos de 10 dezenas combinadas - fechando Quina (caso acerte 5 dezenas). Incríveis 100
                        chances de levar o grande prêmio!
                    </div>
                </ll-collapsable-question>
            </React.Fragment>
        );
    });

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "./CollapsableQuestion";
import "./CollapsableQuestionsContainer";
import "../icon/Icon";
import "../../webComponents/typography/Typography";

storiesOf("Web Components/Collapsable Questions/Container", module)
    .addDecorator(withInfo)
    .add("default", () => {
        return (
            <React.Fragment>
                <h1>Example</h1>

                <ll-collapsable-questions-container>
                    <ll-collapsable-question collapsed={true} class="ll-margin-sm-top ll-margin-sm-bottom">
                        <ll-icon size="extra-large" name="piggy-bank" class="ll-margin-md-bottom" slot="icon" />
                        <span slot="title">100 chances de ganhar!</span>
                        <div slot="description" className="ll-margin-sm-top ll-margin-md-bottom">
                            São 2 jogos de 10 dezenas combinadas - fechando Quina (caso acerte 5 dezenas). Incríveis 100
                            chances de levar o grande prêmio!
                        </div>
                    </ll-collapsable-question>

                    <ll-collapsable-question collapsed={true} class="ll-margin-sm-top ll-margin-sm-bottom">
                        <ll-icon size="extra-large" name="coins-2" class="ll-margin-md-bottom" slot="icon" />
                        <span slot="title" style={{ display: "block" }}>
                            O maior acumulado da Mega-Sena
                        </span>
                        <div slot="description" className="ll-margin-sm-top ll-margin-md-bottom">
                            Arrisque para ganhar maior acumulado do ano com a Mega Da Virada! Que já atingiu o prêmio de
                            R$ 306 milhões
                        </div>
                    </ll-collapsable-question>

                    <ll-collapsable-question collapsed={true} class="ll-margin-sm-top ll-margin-sm-bottom">
                        <ll-icon size="extra-large" name="globe-1" class="ll-margin-md-bottom" slot="icon" />
                        <span slot="title" style={{ display: "block" }}>
                            Apenas R$ 65
                        </span>
                        <div slot="description" className="ll-margin-sm-top ll-margin-md-bottom">
                            Isso mesmo, por apenas R$ 65/cota, você vai obter 100 chances de levar o grande prêmio.
                        </div>
                    </ll-collapsable-question>
                </ll-collapsable-questions-container>
            </React.Fragment>
        );
    });

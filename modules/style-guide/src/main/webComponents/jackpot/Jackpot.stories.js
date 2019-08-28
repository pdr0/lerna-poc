import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import "../../webComponents/typography/MarketingHeadline";
import "../../webComponents/typography/Typography";
import "../../webComponents/jackpot/Jackpot";

storiesOf("Web Components/Jackpot", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default", () => {
        return (
            <React.Fragment>
                <h2>Size - xl</h2>
                <hr />
                <ll-jackpot style={{ color: "red" }} amount="34" units="milhões" currency="R$" size="xl">
                    <span style={{ color: "black" }}>LOTTO Name</span>
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="3.4" units="billion" currency="¥" reverse size="xl">
                    <span style={{ color: "red" }}>LOTTO Name</span>
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="321,000" currency="€" size="xl">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="1,000" currency="€" size="xl" reverse>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <br />

                <h2>Size - lg</h2>
                <hr />
                <ll-jackpot amount="34" units="milhões" currency="R$" size="lg">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="3.4" units="billion" currency="¥" reverse size="lg"></ll-jackpot>
                <hr />
                <ll-jackpot amount="321,000" currency="€" size="lg">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="1,000" currency="€" size="lg" reverse>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <br />

                <h2>Size - md</h2>
                <hr />
                <ll-jackpot amount="34" units="milhões" currency="R$" size="md">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="3.4" units="billion" currency="¥" reverse size="md">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="321,000" currency="€" size="md">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="1,000" currency="€" size="md" reverse>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <br />

                <h2>Size - sm</h2>
                <hr />
                <ll-jackpot amount="34" units="milhões" currency="R$" size="sm">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="3.4" units="billion" currency="¥" reverse size="sm">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="321,000" currency="€" size="sm">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="1,000" currency="€" size="sm" reverse>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <br />

                <h2>Size - xs</h2>
                <hr />
                <ll-jackpot amount="34" units="milhões" currency="R$" size="xs">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="3.4" units="billion" currency="¥" reverse size="xs">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="321,000" currency="€" size="xs">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="1,000" currency="€" size="xs" reverse>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <br />

                <h2>Responsive</h2>
                <hr />
                <ll-jackpot style={{ color: "red" }} amount="34" units="milhões" currency="R$" responsive>
                    <span style={{ color: "black" }}>LOTTO Name</span>
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="3.4" units="billion" currency="¥" reverse responsive>
                    <span style={{ color: "red" }}>LOTTO Name</span>
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="321,000" currency="€" responsive>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="1,000" currency="€" responsive reverse>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <br />

                <h2>Responsive with extra breakpoint</h2>
                <hr />
                <ll-jackpot style={{ color: "red" }} amount="34" units="milhões" currency="R$" responsive extraBp>
                    <span style={{ color: "black" }}>LOTTO Name</span>
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="3.4" units="billion" currency="¥" reverse responsive extraBp>
                    <span style={{ color: "red" }}>LOTTO Name</span>
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="321,000" currency="€" responsive extraBp>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot amount="1,000" currency="€" responsive reverse extraBp>
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <br />

                <h2>No amount</h2>
                <hr />
                <ll-jackpot style={{ color: "red" }} units="Become a millionaire" size="xl">
                    <span style={{ color: "black" }}>LOTTO Name</span>
                </ll-jackpot>
                <hr />
                <ll-jackpot units="Become a millionaire" size="lg">
                    <span style={{ color: "red" }}>LOTTO Name</span>
                </ll-jackpot>
                <hr />
                <ll-jackpot units="Become a millionaire" size="md">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot units="Become a millionaire" size="sm">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <ll-jackpot units="Become a millionaire" size="xs">
                    LOTTO Name
                </ll-jackpot>
                <hr />
                <br />
            </React.Fragment>
        );
    });

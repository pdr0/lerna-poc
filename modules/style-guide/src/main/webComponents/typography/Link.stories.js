// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "./Link";
import { asReactComponent } from "../WebComponentToReactAdapter";
import type { Props as LinkProps } from "../../react/typography/Link";
import Link from "../../react/typography/Link";
import { action } from "@storybook/addon-actions";

const customHandler = action("onClick");

const ReactLink: React.ComponentType<LinkProps> = asReactComponent("ll-link", Link.defaultProps);

storiesOf("Web Components/Deprecated/ll-link", module)
    .addDecorator(withInfo)
    .add(
        "basic",
        //$FlowFixMe: the default props of the Link component are not being considered
        () => <ReactLink onClickHandler={customHandler}>I'm a cool basic link without a reference!</ReactLink>
    )
    .add(
        "basic with reference",
        //$FlowFixMe: the default props of the Link component are not being considered
        () => (
            <ReactLink onClickHandler={customHandler} href={"javascript:void(0);"}>
                I'm a cool basic link with a reference!
            </ReactLink>
        )
    )
    .add("basic disabled", () => (
        <ReactLink onClickHandler={customHandler} disabled={true}>
            I'm a cool but disabled basic link!
        </ReactLink>
    ))
    .add(
        "basic monochrome",
        //$FlowFixMe: the default props of the Link component are not being considered
        () => (
            <ReactLink onClickHandler={customHandler} monochrome={true}>
                I'm a cool monochrome basic link!
            </ReactLink>
        )
    )
    .add(
        "small",
        //$FlowFixMe: the default props of the Link component are not being considered
        () => (
            <ReactLink onClickHandler={customHandler} small={true}>
                I'm a cool small link without a reference!
            </ReactLink>
        )
    )
    .add(
        "small with reference",
        //$FlowFixMe: the default props of the Link component are not being considered
        () => (
            <ReactLink onClickHandler={customHandler} small={true} href={"javascript:void(0);"}>
                I'm a cool small link with a reference!
            </ReactLink>
        )
    )
    .add("small disabled", () => (
        <ReactLink onClickHandler={customHandler} small={true} disabled>
            I'm a cool but disabled small link!
        </ReactLink>
    ))
    .add(
        "small monochrome",
        //$FlowFixMe: the default props of the Link component are not being considered
        () => (
            <ReactLink onClickHandler={customHandler} small={true} monochrome={true}>
                I'm a cool monochrome and small basic link!
            </ReactLink>
        )
    );

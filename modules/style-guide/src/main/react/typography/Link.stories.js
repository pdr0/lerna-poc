import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Link from "./Link";

const click = action("onClick");

storiesOf("Link", module)
    .add("basic", withInfo()(() => <Link onClickHandler={click}>I'm a cool basic link without a reference!</Link>))
    .add(
        "basic with reference",
        withInfo()(() => (
            <Link onClickHandler={click} href={"javascript:void(0);"}>
                I'm a cool basic link with a reference!
            </Link>
        ))
    )
    .add(
        "basic disabled",
        withInfo()(() => (
            <Link onClickHandler={click} disabled>
                I'm a cool but disabled basic link!
            </Link>
        ))
    )
    .add(
        "basic monochrome",
        withInfo()(() => (
            <Link onClickHandler={click} monochrome>
                I'm a cool monochrome basic link!
            </Link>
        ))
    )
    .add(
        "small",
        withInfo()(() => (
            <Link onClickHandler={click} small>
                I'm a cool small link without a reference!
            </Link>
        ))
    )
    .add(
        "small with reference",
        withInfo()(() => (
            <Link onClickHandler={click} small href={"javascript:void(0);"}>
                I'm a cool small link with a reference!
            </Link>
        ))
    )
    .add(
        "small disabled",
        withInfo()(() => (
            <Link onClickHandler={click} small disabled>
                I'm a cool but disabled small link!
            </Link>
        ))
    )
    .add(
        "small monochrome",
        withInfo()(() => (
            <Link onClickHandler={click} small monochrome>
                I'm a cool monochrome and small basic link!
            </Link>
        ))
    );

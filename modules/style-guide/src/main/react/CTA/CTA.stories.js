// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import CTA from "./CTA";

storiesOf("CTA", module)
    .add("primary", withInfo()(() => <CTA>Primary CTA</CTA>))
    .add("primary small padding", withInfo()(() => <CTA smallPadding={true}>Primary CTA</CTA>))
    .add("primary disabled", withInfo()(() => <CTA disabled>Primary CTA</CTA>))
    .add(
        "primary disabled small padding",
        withInfo()(() => (
            <CTA disabled smallPadding={true}>
                Primary CTA
            </CTA>
        ))
    )
    .add("secondary", withInfo()(() => <CTA type="secondary">Secondary CTA</CTA>))
    .add(
        "secondary small padding",
        withInfo()(() => (
            <CTA type="secondary" smallPadding={true}>
                Secondary CTA
            </CTA>
        ))
    )
    .add(
        "secondary disabled",
        withInfo()(() => (
            <CTA type="secondary" disabled>
                Secondary CTA
            </CTA>
        ))
    )
    .add(
        "secondary disabled small padding",
        withInfo()(() => (
            <CTA type="secondary" disabled smallPadding={true}>
                Secondary CTA
            </CTA>
        ))
    )
    .add("link", withInfo()(() => <CTA type="link">Link CTA</CTA>))
    .add(
        "link disabled",
        withInfo()(() => (
            <CTA type="link" disabled>
                Link CTA
            </CTA>
        ))
    );

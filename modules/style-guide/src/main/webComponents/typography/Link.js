// @flow
import Link from "../../react/typography/Link";
import { asWebComponent, properties } from "../ReactToWebComponentAdapter";

asWebComponent(
    Link,
    {
        small: properties.boolean,
        disabled: properties.boolean,
        monochrome: properties.boolean,
        onClickHandler: properties.event
    },
    "ll-link"
);

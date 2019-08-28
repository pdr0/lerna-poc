// @flow
import VerticallyStackedLayout from "../../react/layout/VerticallyStackedLayout";
import { asWebComponent, properties } from "../ReactToWebComponentAdapter";

asWebComponent(
    VerticallyStackedLayout,
    {
        size: properties.string,
        className: properties.string
    },
    "ll-verticallystackedlayout"
);

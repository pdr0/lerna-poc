import { LitElement, html } from "lit-element";
import { customElement } from "../customElement";
import styles from "./SyndicateHorizontalLayout.lit.scss";

@customElement("ll-syndicate-horizontal-layout")
export class SyndicateHorizontalLayout extends LitElement {
    static styles = styles;

    render() {
        return html`
            <slot></slot>
        `;
    }
}

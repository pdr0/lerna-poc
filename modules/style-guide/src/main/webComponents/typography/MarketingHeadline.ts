import { LitElement, html, query } from "lit-element";
import { customElement } from "../customElement";
import styles from "./MarketingHeadline.lit.scss";

@customElement("ll-marketing-headline")
export class MarketingHeadline extends LitElement {
    static styles = styles;

    render() {
        return html`
            <slot></slot>
        `;
    }
}

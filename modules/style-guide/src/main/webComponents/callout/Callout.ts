import { LitElement, html, property } from "lit-element";
import { customElement } from "../customElement";
import styles from "./Callout.lit.scss";
import "../typography/Typography";

@customElement("ll-callout")
export class Callout extends LitElement {
    @property({ type: String }) text = "";

    static styles = styles;

    render() {
        return html`
            <div class="main-container">
                <ll-typography class="callout-text" size="callout">${this.text}</ll-typography>
                <slot></slot>
            </div>
        `;
    }
}

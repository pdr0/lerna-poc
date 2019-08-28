import { LitElement, html, property } from "lit-element";
import { customElement } from "../customElement";
import styles from "./CollapsableQuestion.lit.scss";

@customElement("ll-collapsable-question")
export class CollapsableQuestion extends LitElement {
    static styles = styles;

    @property({ type: Boolean }) collapsed = false;

    render() {
        return html`
            <slot name="icon"></slot>
            <slot name="title"></slot>
            <slot name="description"></slot>
        `;
    }
}

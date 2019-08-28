import { LitElement, property, html } from "lit-element";
import { customElement } from "../customElement";
import styles from "./Icon.lit.scss";

type IconSize = "regular" | "small" | "large" | "extra-large";

@customElement("ll-icon")
export class Icon extends LitElement {
    static styles = styles;

    @property({ type: String })
    name!: string;

    @property({ type: String })
    size: IconSize = "regular";

    render() {
        return html`
            <i class="icon icon-${this.name} ${this.size}"><slot></slot></i>
        `;
    }
}

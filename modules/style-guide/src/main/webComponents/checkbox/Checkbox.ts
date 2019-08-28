import { LitElement, html, property, query } from "lit-element";
import { customElement } from "../customElement";
import styles from "./Checkbox.lit.scss";

@customElement("ll-checkbox")
export class RadioAlt extends LitElement {
    static styles = styles;

    @property({ type: Boolean }) checked = false;
    @property({ type: Boolean }) disabled = false;
    @property({ type: String }) trackName = false;
    @query("input")
    private input!: HTMLInputElement;

    private clickHandler = () => {
        this.checked = this.input.checked;
        this.dispatchEvent(
            new CustomEvent("click", { bubbles: true, composed: true, detail: { checked: this.checked } })
        );
    };

    render() {
        return html`
            <label class="${this.disabled ? "disabled" : ""} ${this.checked ? "checked" : ""}">
                <div class="checkbox">
                    <input
                        type="checkbox"
                        ?checked="${this.checked}"
                        ?disabled="${this.disabled}"
                        data-track-name="${this.trackName}"
                        @click="${this.clickHandler}"
                    />
                    <span class="checkbox-marker"></span>
                </div>
                <span class="label">
                    <slot></slot>
                </span>
            </label>
        `;
    }
}

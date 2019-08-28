import { LitElement, html, property, query } from "lit-element";
import { customElement } from "../customElement";
import styles from "./RadioAlt.lit.scss";

export interface RadioAltEvent extends CustomEvent {
    detail: {
        value: string;
    };
}

@customElement("ll-radio-alt")
export class RadioAlt extends LitElement {
    static styles = styles;

    @property({ type: String })
    value = "";
    @property({ type: Boolean, reflect: true })
    checked = false;
    @property()
    trackName = "";
    @query("input")
    private input!: HTMLInputElement;

    inputChange = () => {
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, composed: true, detail: { value: this.value } }));
    };

    firstUpdated() {
        this.input.checked = this.checked;
        this.input.addEventListener("change", this.inputChange);
    }

    disconnectedCallback() {
        this.input.removeEventListener("change", this.inputChange);
        super.disconnectedCallback();
    }

    attributeChangedCallback(name: string, old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, old, value);
        if (name === "checked" && this.input) {
            this.input.checked = this.checked;
        }
    }

    render() {
        return html`
            <label>
                <input
                    class="js-track"
                    data-track-name="${this.trackName}"
                    type="radio"
                    value="${this.value}"
                    ?checked="${this.checked}"
                />
                <span class="label"><slot></slot></span>
            </label>
        `;
    }
}

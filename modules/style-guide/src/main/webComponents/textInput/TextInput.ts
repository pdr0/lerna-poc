import { html, LitElement, property, query } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { customElement } from "../customElement";
import styles from "./TextInput.lit.scss";

type TextInputLabelProps = "inlineLabel" | "validInlineLabel" | "invalidInlineLabel";
export type TextInputStatus = "valid" | "invalid" | "default";

@customElement("ll-text-input")
export class TextInput extends LitElement {
    static styles = styles;
    static statusToLabel: { [key: string]: TextInputLabelProps } = {
        default: "inlineLabel",
        valid: "validInlineLabel",
        invalid: "invalidInlineLabel"
    };

    @property({ type: String })
    label = "";
    @property({ type: String })
    type: "text" = "text";
    @property({ type: String, reflect: true })
    value = "";
    @property({ type: String })
    inlineLabel = "";
    @property({ type: String })
    validInlineLabel = "";
    @property({ type: String })
    invalidInlineLabel = "";
    @property({ type: String, reflect: true })
    status: TextInputStatus = "default";
    @property({ type: Boolean, reflect: true })
    private filled = false;
    @property({ type: Boolean })
    private hasFocus = false;
    @property({ type: Boolean })
    private exitAnimation = false;
    @property({ type: Boolean })
    private enterAnimation = false;
    @property({ type: Boolean })
    private hasPrefix = false;
    @property({ type: String })
    inputmode = "";
    @query("input")
    private input!: HTMLInputElement;
    @query("slot[name=prefix]")
    private prefixSlot!: HTMLSlotElement;
    @property({ type: Boolean })
    dirty = false;
    @property()
    trackName = "";

    private updateFilled() {
        this.filled = !!this.input.value;
    }

    private inputChange = () => {
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, composed: true, detail: { value: this.value } }));
    };

    private inputKeyUp = () => {
        this.value = this.input.value;
        this.updateFilled();
    };

    private inputBlur = () => {
        if (this.dirty && this.status !== "invalid") {
            this.exitAnimation = true;
        }
        this.hasFocus = false;
    };

    private inputFocus = () => (this.hasFocus = true);

    private updateStatus() {
        if (!["valid", "invalid"].includes(this.status)) {
            this.status = "default";
        }
    }

    private labelAnimationEnd = (event: AnimationEvent) => {
        if (event.animationName === "fadeOut") {
            this.exitAnimation = false;
        }
    };

    private updateSlot() {
        this.hasPrefix = this.prefixSlot.assignedNodes().length > 0;
    }

    private updateDirty() {
        if (this.value) {
            this.dirty = true;
        }
    }

    firstUpdated() {
        this.updateDirty();
        this.updateStatus();
        this.updateFilled();
        this.updateSlot();
    }

    attributeChangedCallback(name: string, old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, old, value);
        if (name === "value" && this.input) {
            this.input.value = this.value;
            this.updateFilled();
        } else if (name === "status") {
            this.updateStatus();
        }
    }

    getInlineLabel() {
        if (this.status === "invalid") {
            return this.invalidInlineLabel;
        }
        if (this.hasFocus && this.status === "default") {
            return this.inlineLabel;
        }
        if (this.hasFocus && this.dirty && this.status === "valid") {
            return this.validInlineLabel;
        }
        if (this.exitAnimation) {
            return this[TextInput.statusToLabel[this.status]];
        }
        return;
    }

    render() {
        const inlineLabel = this.getInlineLabel();
        return html`
            <label class="input-container">
                <slot class="${classMap({ shown: this.hasPrefix })}" name="prefix"></slot>
                <div class="input-wrapper">
                    <input
                        @change="${this.inputChange}"
                        @keyup="${this.inputKeyUp}"
                        @focus="${this.inputFocus}"
                        @blur="${this.inputBlur}"
                        type="${this.type}"
                        value="${this.value}"
                        inputmode="${this.inputmode}"
                        class="js-track"
                        data-track-name="${this.trackName}"
                    />
                    <span class="placeholder">${this.label}</span>
                    <label class="input-label">${this.label}</label>
                </div>
                <slot name="suffix"></slot>
            </label>
            ${inlineLabel &&
                html`
                    <span
                        class="${classMap({ "help-text": true, fadeOut: this.exitAnimation })}"
                        @animationend="${this.labelAnimationEnd}"
                        >${inlineLabel}</span
                    >
                `}
        `;
    }
}

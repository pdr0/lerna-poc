import {LitElement, property, html, query} from "lit-element";
import {customElement} from "../customElement";
import styles from "./NumberInput.lit.scss";

@customElement("ll-number-input")
export class NumberInput extends LitElement {
    static styles = styles;

    @property({type: Number}) max = 1000000;
    @property({type: Number}) min = 1;
    @property({type: Number}) value: number | null = null;
    @property({type: Boolean}) disabled = false;
    @property({type: Boolean}) required = false;
    @query("input") private input!: HTMLInputElement;

    private convertToString(value: number | null): string {
        return value === null ? "" : value.toString();
    }

    private getCorrectValue(value: string): number | null {
        if (!value) {
            return this.required ? this.min : null;
        }

        let numericValue = parseInt(value);
        if (numericValue > this.max) {
            numericValue = this.max;
        } else if (numericValue < this.min) {
            numericValue = this.min;
        }
        return numericValue;
    }

    private updateValue(value: number | null) {
        if (this.value !== value) {
            this.value = value;

            this.dispatchEvent(new CustomEvent("change", {
                bubbles: true,
                composed: true,
                detail: {value: this.value}
            }));
        }
        if (this.input) {
            this.input.value = this.convertToString(value);
        }
    }

    private onKeyDown = (event: KeyboardEvent) => {
        const isArrows = (event.code === 'ArrowLeft') || (event.code === 'ArrowRight');
        const isNumber = /^Digit[0-9]$/.test(event.code);
        const isDelete = (event.code === 'Delete') || (event.code === 'Backspace');

        this.dispatchEvent(new KeyboardEvent(event.type, event));

        if (this.max > 9 || isArrows) {
            return;
        }

        if (isNumber) {
            this.input.value = event.code.replace("Digit", "");
            return;
        }

        if (!isNumber && !isDelete) {
            event.preventDefault();
        }
    };

    private checkInput = () => {
        const value = this.getCorrectValue(this.input.value);
        this.updateValue(value);
    };

    private onFocusOut = () => {
        this.cleanInputValue();
        this.checkInput();
    };

    private cleanInputValue = () => {
        this.input.value = this.input.value.replace(/[^0-9]/g, "");
    };

    attributeChangedCallback(name: string, old: string | null, value: string | null) {
        if (name === "min" && value) {
            const oldNumber = parseInt(value);
            if (oldNumber < 0) {
                super.attributeChangedCallback(name, old, "0");
                return;
            }
            if (oldNumber > this.max) {
                super.attributeChangedCallback(name, old, this.max.toString());
                return;
            }
        }

        if (name === "max" && value) {
            const oldNumber = parseInt(value);

            if (oldNumber < this.min) {
                super.attributeChangedCallback(name, old, this.min.toString());
                return;
            }
        }

        if (name === "value" && value) {
            this.updateValue(this.getCorrectValue(value));
        }

        super.attributeChangedCallback(name, old, value);
    }

    firstUpdated() {
        const correctValue = this.getCorrectValue(this.input.value);
        this.updateValue(correctValue);
    }

    render() {
        const maxLength = this.max.toString().length;
        const value = this.value === null ? "" : this.value;

        return html`
            <input @keydown="${this.onKeyDown}" @input="${this.cleanInputValue}" @focusout="${this.onFocusOut}" type="tel" ?disabled=${this.disabled}
                value="${value}" min="${this.min}" max="${this.max}" size="${maxLength}" maxlength="${maxLength}" />
        `;
    }
}

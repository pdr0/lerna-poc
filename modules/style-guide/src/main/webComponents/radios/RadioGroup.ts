import { LitElement, html, query, property } from "lit-element";
import { customElement } from "../customElement";
import { RadioAlt, RadioAltEvent } from "./RadioAlt";
import styles from "./RadioGroup.lit.scss";

@customElement("ll-radio-group")
export class RadioGroup extends LitElement {
    static styles = styles;

    @property({ type: String, reflect: true })
    value = "";
    @query("slot")
    slotElement!: HTMLSlotElement;
    private inputs: Array<RadioAlt> = [];

    private updateSelection(value: string) {
        this.inputs.forEach(radioInput => {
            radioInput.checked = radioInput.value === value;
        });
    }

    private onChange = (event: RadioAltEvent) => {
        const value: string = event.detail.value;
        this.value = value;
        this.updateSelection(value);
    };

    firstUpdated() {
        this.addEventListener("change", this.onChange as EventListener);
        this.inputs = this.slotElement
            .assignedNodes()
            .filter(element => element instanceof HTMLElement)
            .filter(element => (element as HTMLElement).tagName.toLowerCase() === "ll-radio-alt")
            .map(element => element as RadioAlt);
        const checkedInput = this.inputs.find(input => input.checked);
        const defaultValue = (checkedInput && checkedInput.value) || this.value;
        this.updateSelection(defaultValue);
    }

    attributeChangedCallback(name: string, old: string | null, value: string | null) {
        super.attributeChangedCallback(name, old, value);
        if (name === "value") {
            this.updateSelection(this.value);
        }
    }

    disconnectedCallback() {
        this.removeEventListener("change", this.onChange as EventListener);
        super.disconnectedCallback();
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
}

import {LitElement, html, property, query} from "lit-element";
import { customElement } from "../customElement";
import "../controls/ControlPlus";
import "../controls/ControlMinus";
import "../../webComponents/numberInput/NumberInput";
import styles from "./QuantitySelector.lit.scss";
import {NumberInput} from "../numberInput/NumberInput";

@customElement("ll-quantity-selector")
export class QuantitySelector extends LitElement {

    @property({type: Number}) max = 1000000;
    @property({type: Number}) min = 1;
    @property({type: Number}) private value = 1;
    @query("ll-number-input") private input!: NumberInput;

    static styles = styles;

    private onClick = (newValue: number) => {
        const updatedValue = this.value + newValue;

        if (updatedValue > this.max || updatedValue < this.min) {
            return;
        }

        this.value = updatedValue;
    };

    private onChange = (event: CustomEvent) => {
        this.value = event.detail.value;
        this.dispatchEvent(new CustomEvent(event.type, event));
    };

    firstUpdated() {
        this.max = this.input.max;
        this.min = this.input.min;
    }

    render() {
        return html`
            <div class="main-container">
                <ll-control-minus @click="${() => this.onClick(-1)}"></ll-control-minus>
                <ll-number-input max="${this.max}" min="${this.min}" required value="${this.value}" @change="${this.onChange}"></ll-number-input>
                <ll-control-plus @click="${() => this.onClick(1)}"></ll-plus-rounded-button>
            </div>
        `;
    }
}

import { html, LitElement, property } from "lit-element";
import { customElement } from "../customElement";
import styles from "./Jackpot.lit.scss";

@customElement("ll-jackpot")
export class Jackpot extends LitElement {
    static SIZES: string[] = ["xs", "sm", "md", "lg", "xl"];
    static DEFAULT_SIZE: string = "lg";
    static DEFAULT_UNITS: string = " ";

    @property({ type: String }) currency = "";
    @property({ type: String }) amount = "";
    @property({ type: String }) units = "";
    @property({
        converter: value => (Jackpot.SIZES.includes(value) ? value : Jackpot.DEFAULT_SIZE)
    })
    size = Jackpot.DEFAULT_SIZE;
    @property({ type: Boolean }) reverse = false;
    @property({ type: Boolean }) responsive = false;
    @property({ type: Boolean }) extraBp = false;

    static styles = [styles];

    renderLeft() {
        return this.reverse
            ? html`
                  <div class="left">
                      <div class="amount">${this.amount}</div>
                  </div>
              `
            : html`
                  <div class="left">
                      <div class="currency">${this.currency}</div>
                      <div class="amount">${this.amount}</div>
                  </div>
              `;
    }

    renderRight() {
        return this.reverse
            ? html`
                  <div class="unit ${this.units ? "mixed" : ""}">
                      ${this.units}
                      <div class="currency">${this.currency}</div>
                  </div>
              `
            : html`
                  <div class="unit">
                      ${this.units || Jackpot.DEFAULT_UNITS}
                  </div>
              `;
    }

    renderFull() {
        return html`
            ${this.amount && this.renderLeft()}
            <div class="right">
                <div class="lottery">
                    <slot></slot>
                </div>
                ${this.renderRight()}
            </div>
        `;
    }

    renderСlipped() {
        return this.reverse
            ? html`
                  ${this.amount} ${this.units} ${this.currency}
              `
            : html`
                  ${this.currency}${this.amount} ${this.units}
              `;
    }

    render() {
        return html`
            <div
                class="container ${this.size} ${this.responsive ? "responsive" : ""} ${this.extraBp ? "extra-bp" : ""}"
            >
                ${this.size === "sm" || this.size === "xs" ? this.renderСlipped() : this.renderFull()}
            </div>
        `;
    }
}

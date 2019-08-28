import { html, LitElement, property } from "lit-element";
import { customElement } from "../../customElement";
import styles from "./Logo.lit.scss";

@customElement("ll-lottery-logo")
export class Logo extends LitElement {
    @property({ type: String }) lottery = "";
    @property({ type: String }) locale = "";
    @property({ type: Boolean }) responsiveSize = false;
    @property({ type: Boolean }) extraBp = false;
    @property({ type: String }) width = "";
    @property({ type: String }) height = "";

    static styles = styles;

    render() {
        const prefix = (<any>window).LOGO_FALLBACK_URL ? (<any>window).LOGO_FALLBACK_URL : this.locale;

        return html`
            <img
                class="${this.responsiveSize && (!this.width && !this.height) ? "responsive-image" : ""} ${this.extraBp
                    ? "extra-bp"
                    : ""}"
                src="${prefix}/api/lotteries/${this.lottery}/logo"
                alt="${this.lottery}"
                width="${this.width}"
                height="${this.height}"
            />
        `;
    }
}

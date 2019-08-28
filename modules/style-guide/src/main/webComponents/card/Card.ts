import { LitElement, html, property, query } from "lit-element";
import { customElement } from "../customElement";
import styles from "./Card.lit.scss";
import spacesStyles from "../Spaces.lit.scss";

@customElement("ll-card")
export class Card extends LitElement {
    @property({ type: String }) mediaPosition = "left";
    @property({ type: Boolean }) border = false;
    @property({ type: String }) textAlign = "";
    @property({ type: Boolean }) mediaFullSize = false;

    static styles = [styles, spacesStyles];

    @query("slot[name=media]")
    mediaSlotElement!: HTMLSlotElement;
    @query(".main-container")
    mediasContainer!: HTMLElement;

    firstUpdated() {
        if (this.mediaSlotElement.assignedNodes().length === 0) {
            this.mediasContainer.classList.add("no-media");
        }
    }

    render() {
        return html`
            <div class="main-container ll-padding-md ${this.mediaPosition} ${this.border ? "with-border" : ""}">
                <div class="media-container ${this.mediaFullSize ? "full-size" : ""}">
                    <slot name="media"></slot>
                </div>
                <div class="text-container ${this.textAlign}">
                    <slot name="title"></slot>
                    <div class="paragraph-container ll-margin-md-top">
                        <slot name="paragraph"></slot>
                    </div>
                </div>
            </div>
        `;
    }
}

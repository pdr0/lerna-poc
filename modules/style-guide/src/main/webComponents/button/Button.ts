import { html, LitElement, property, query } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { customElement } from "../customElement";
import styles from "./Button.lit.scss";

export type ButtonTypes = "primary" | "secondary" | "primarycart";
export type ButtonSize = "normal" | "small" | "large" | "none" | "extra-small";

@customElement("ll-button")
export class Button extends LitElement {
    static styles = styles;

    @property({ type: String })
    value = "";
    @property({ type: String })
    type: ButtonTypes = "primary";
    @property({ type: String })
    size: ButtonSize = "normal";
    @property({ type: Boolean, reflect: true })
    disabled = false;
    @property({ type: Boolean })
    private typeExtended = false;
    @property({ type: String })
    href: string | null = null;
    @query("slot[name=secondary]")
    private secondarySlot!: HTMLSlotElement;

    firstUpdated() {
        this.typeExtended = this.secondarySlot.assignedNodes().length > 0;
    }

    private getClasses() {
        return {
            button: true,
            [`size-${this.size}`]: this.type !== "primarycart",
            [`type-${this.type}`]: true,
            [`type-${this.type}-extended`]: this.typeExtended
        };
    }

    private handleLinkClick(event: MouseEvent) {
        if (this.disabled) {
            event.preventDefault();
        }
    }

    renderContent() {
        // noinspection CheckTagEmptyBody,HtmlUnknownAttribute
        return html`
            <div>
                <slot name="secondary"></slot>
                <slot></slot>
            </div>
        `;
    }

    renderButton() {
        return html`
            <button class="${classMap(this.getClasses())}" ?disabled=${this.disabled}>
                ${this.renderContent()}
            </button>
        `;
    }

    renderAnchor() {
        return html`
            <a
                @click="${this.handleLinkClick}"
                class="${classMap({ disabled: this.disabled, ...this.getClasses() })}"
                ?disabled=${this.disabled}
                href="${this.href}"
            >
                ${this.renderContent()}
            </a>
        `;
    }

    render() {
        return this.href === null ? this.renderButton() : this.renderAnchor();
    }
}

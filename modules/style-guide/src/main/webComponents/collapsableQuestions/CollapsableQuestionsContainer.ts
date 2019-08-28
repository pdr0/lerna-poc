import { LitElement, html, property, query } from "lit-element";
import { customElement } from "../customElement";
import styles from "./CollapsableQuestionsContainer.lit.scss";
import spacesStyles from "../Spaces.lit.scss";

@customElement("ll-collapsable-questions-container")
export class CollapsableQuestionsContainer extends LitElement {
    static styles = [styles, spacesStyles];

    @property({ type: Boolean })
    private isExpanded = false;

    @query("slot")
    slotElement!: HTMLSlotElement;

    private handleClick = () => {
        if (window.innerWidth >= 768) {
            return;
        }

        this.isExpanded = !this.isExpanded;

        const childSlotNodes = <HTMLElement[]>this.slotElement.assignedNodes();
        childSlotNodes
            .filter(node => node.nodeType === Node.ELEMENT_NODE)
            .forEach(node => {
                if (this.isExpanded) {
                    node.removeAttribute("collapsed");
                    return;
                }
                node.setAttribute("collapsed", "true");
            });
    };

    private onResize = () => {
        if (window.innerWidth >= 768 && !this.isExpanded) {
            this.isExpanded = true;

            const childSlotNodes = <HTMLElement[]>this.slotElement.assignedNodes();
            childSlotNodes
                .filter(node => node.nodeType === Node.ELEMENT_NODE)
                .forEach(node => {
                    node.removeAttribute("collapsed");
                });
        }
    };

    firstUpdated() {
        this.onResize();
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("resize", this.onResize);
    }

    disconnectedCallback() {
        window.removeEventListener("resize", this.onResize);
        super.disconnectedCallback();
    }

    render() {
        return html`
            <div
                class="container ll-padding-md ${this.isExpanded ? "expanded" : "collapsed"}"
                @click="${this.handleClick}"
            >
                <slot></slot>
            </div>
        `;
    }
}

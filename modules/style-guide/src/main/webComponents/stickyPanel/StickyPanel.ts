import { html, LitElement, property, query } from "lit-element";
import { customElement } from "../customElement";
import styles from "./StickyPanel.lit.scss";

type StickyPanelState = "hidden" | "collapsed" | "expanded";

const toNumber = (value:String) => parseInt(value.trim().split("px")[0]);
const toPixels = (value:Number) => value + "px";

@customElement("ll-sticky-panel")
export class StickyPanel extends LitElement {
    static styles = styles;
    static MOBILE_HEADER_HEIGHT = 56;

    @property({ type: String, reflect: true })
    state: StickyPanelState = "hidden";
    @query("slot")
    slotElement!: HTMLSlotElement | null;
    @query(".content")
    contentElement!: HTMLDivElement | null;

    private onClick = (event: MouseEvent) => {
        const element = event.composedPath()[0];
        if (element instanceof StickyPanel) {
            this.state = "collapsed";
            this.dispatchEvent(new CustomEvent("change", { bubbles: true, composed: true, detail: this.state }));
        }
    };

    private onResize = () => {
        this.recalculateHeight();
    };

    private getContentElement(): HTMLElement | null {
        if (!this.slotElement) {
            return null;
        }
        const ShadyDOM: any = (window as any).ShadyDOM;
        if (typeof ShadyDOM !== "undefined" && this.slotElement.clientHeight === 0) {
            // in edge we have to do this hack so we know the height of the content
            const element = ShadyDOM.nativeTree.firstElementChild(ShadyDOM.nativeMethods.querySelector.call(this, ".ll-sticky-panel.content"));
            if (!(element instanceof HTMLUnknownElement)) {
                return element;
            }
        } else {
            return this.slotElement;
        }
        return null;
    }

    private recalculateHeight() {
        if (this.slotElement == null || this.contentElement == null) {
            return;
        }
        if (this.state === "collapsed") {
            const element = this.getContentElement();
            if (element === null) {
                return;
            }
            const padding = toNumber(getComputedStyle(this).getPropertyValue('--sticky-panel-offset'));
            this.style.setProperty(`--height-${this.state}`, toPixels(element.clientHeight + padding));
            return;
        }
        if (this.state === "expanded") {
            const windowHeightWithoutMobileBanner = window.innerHeight - StickyPanel.MOBILE_HEADER_HEIGHT;
            const panelHeight = Math.min(this.contentElement.scrollHeight, windowHeightWithoutMobileBanner);
            this.style.setProperty(`--height-${this.state}`, toPixels(panelHeight));
            this.style.setProperty("--max-content", toPixels(windowHeightWithoutMobileBanner));
        }
    }

    firstUpdated() {
        this.recalculateHeight();
        this.addEventListener("click", this.onClick);
        window.addEventListener("resize", this.onResize, { passive: true });
        // it's because an issue with the first paint, it's not calculating properly the height of the element
        setTimeout(() => this.recalculateHeight(), 0);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.onClick);
        window.removeEventListener("resize", this.onResize);
    }

    attributeChangedCallback(name: string, old: string | null, value: string | null) {
        super.attributeChangedCallback(name, old, value);
        if (name === "state") {
            this.recalculateHeight();
        }
    }

    render() {
        return html`
            <div class="content"><slot></slot></div>
        `;
    }
}

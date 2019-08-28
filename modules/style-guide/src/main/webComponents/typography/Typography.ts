import styles from "./Typography.scss";
import { customElement } from "../customElement";

let stylesheet: CSSStyleSheet;
try {
    stylesheet = new CSSStyleSheet();
} catch (e) {}

@customElement("ll-typography")
export class Typography extends HTMLElement {
    static defaultTags: { [size: string]: string } = {
        h7: "h6",
        h8: "h6",
        sp: "p",
        callout: "span"
    };

    static getDefaultTag(size?: string | null) {
        if (!size) {
            return null;
        }
        return Typography.defaultTags[size];
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        if (stylesheet) {
            // @ts-ignore
            shadow.adoptedStyleSheets = [stylesheet];
        }
    }

    connectedCallback() {
        const size = this.getAttribute("size");
        const tag = this.getAttribute("tag") || Typography.getDefaultTag(size) || size || "p";
        const element = document.createElement(tag);
        element.classList.add(size || "p");
        element.appendChild(document.createElement("slot"));
        this.shadowRoot!.appendChild(element);
        /* istanbul ignore if | we don't run karma with multiple browsers in CI, I promise that I checked it in local */
        if (!stylesheet) {
            // browser doesn't support Constructable Stylesheets
            const style = document.createElement("style");
            style.innerHTML = styles;
            this.shadowRoot!.appendChild(style);
        }
        if (stylesheet && stylesheet.cssRules.length === 0) {
            // @ts-ignore
            stylesheet.replaceSync(styles);
        }
    }
}

import { LitElement, html, property } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import "../icon/Icon";
import { customElement } from "../customElement";
import styles from "./Tooltip.lit.scss";

type TooltipPosition = "top-right" | "bottom-right";

@customElement("ll-tooltip")
export class Tooltip extends LitElement {
    static styles = styles;

    @property()
    position: TooltipPosition = "top-right";

    render() {
        return html`
            <div class=${classMap({ content: true, [this.position]: true })}>
                <slot></slot>
            </div>
            <div class="icon-container">
                <ll-icon name="information"></ll-icon>          
            </div>
        `;
    }
}

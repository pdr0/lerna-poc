import {LitElement, html} from "lit-element";
import { customElement } from "../customElement";
import "./ButtonRound";
import "../../webComponents/icon/Icon";

@customElement("ll-button-round-close")
export class ButtonRoundClose extends LitElement {

    render() {
        return html`
                    <ll-button-round iconSize="small" iconName="delete-1" />
        `;
    }
}

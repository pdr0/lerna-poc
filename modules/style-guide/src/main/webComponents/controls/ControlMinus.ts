import {LitElement, html} from "lit-element";
import { customElement } from "../customElement";
import "../buttonRound/ButtonRound";
import "../../webComponents/icon/Icon";

@customElement("ll-control-minus")
export class ControlMinus extends LitElement {

    render() {
        return html`
                    <ll-button-round border="true" color="primary" iconSize="regular" iconName="minus-1" />
        `;
    }
}

import {LitElement, html, property} from "lit-element";
import { customElement } from "../customElement";
import "../../webComponents/icon/Icon";
import styles from "./ButtonRound.lit.scss";

type Background = "plain" | "grey" | "primary";
type Color = "grey" | "primary" | "white";
type IconSize = "regular" | "small" | "large" | "extra-large";
type ButtonType = "quickPick" | "edit" | "delete";
type PredefinedButton = {
    shadow: boolean,
    background: Background,
    color: Color,
    iconSize: IconSize,
    iconName: string
}

@customElement("ll-button-round")
export class ButtonRound extends LitElement {
    @property({ type: Boolean }) border = false;
    @property({ type: Boolean }) shadow = false;
    @property({ type: String }) background: Background = "plain";
    @property({ type: String }) color: Color = "grey";
    @property({ type: String }) iconSize: IconSize = "regular";
    @property({ type: String }) iconName = "";
    @property({ type: String }) type: ButtonType | null = null;

    static styles = styles;

    private predefinedButtons: {[key: string]: PredefinedButton} = {
        quickPick: {
            shadow: true,
            background: "primary",
            color: "white",
            iconSize: "regular",
            iconName: "dice-2"
        },
        edit: {
            shadow: true,
            background: "grey",
            color: "primary",
            iconSize: "regular",
            iconName: "pencil-2"
        },
        delete: {
            shadow: true,
            background: "grey",
            color: "primary",
            iconSize: "regular",
            iconName: "bin-2"
        }
    };

    render() {
        if (this.type && this.predefinedButtons[this.type]) {
            const predefinedButton = this.predefinedButtons[this.type];
            this.shadow = predefinedButton.shadow;
            this.background = predefinedButton.background;
            this.color = predefinedButton.color;
            this.iconSize = predefinedButton.iconSize;
            this.iconName = predefinedButton.iconName;
        }

        return html`
            <button class="main-container ${this.border ? "with-border" : ""} ${this.shadow ? "with-shadow" : ""} with-${this.background}-background">
                    <ll-icon class="${this.color}" size="${this.iconSize}" name="${this.iconName}" />
            </button>
        `;
    }
}

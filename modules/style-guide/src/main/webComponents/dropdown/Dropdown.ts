import { LitElement, property, html, query } from "lit-element";
import {customElement} from "../customElement";
import styles from "./Dropdown.lit.scss";

@customElement("ll-lottery-dropdown")
export class Dropdown extends LitElement {
    @property({type: String})
    label = "";
    @property({type: String})
    name = "";
    @property({type: Array})
    values = [];
    @property({type: []})
    options = [];
    @property({type: Boolean})
    required = false;
    @property({type: Boolean})
    disabled = false;
    @property({type: String})
    value = "";
    @property({type: String})
    defaultOption = "";
    @query("select")
    private select!: HTMLSelectElement;

    static styles = styles;

    // we need to disable like this, due html disabled attribute works just putting "disabled" in html element (not boolean working)
    protected firstUpdated(): void {
        this.select.disabled = this.disabled;
        this.select.required = this.required;
    }

    onChangeItem = (event: any) => {
        let selected: any = this.values.find(item => item === event.target.value);
        // if we have "options" array also, we send its value to dispatchEvent
        if (this.values.length === this.options.length) {
            const index = this.values.findIndex(item => item === event.target.value);
            selected = this.options[index];
        }
        // we update value here, because directly it does not work for typing issue
        this.value = selected;
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, composed: true, detail: { value: selected } }));
    }

    editModeRender() {

        return html`
            <div class="dropdown ${this.value !== "" ? "is-selected" : ""} ${this.required ? "is-required" : ""} ${this.disabled ? "is-disabled" : ""}">
                <select
                        class="track-option"
                        data-track-listeners="change"
                        @change="${this.onChangeItem}"
                        name="${this.name}"
                >
                        ${this.defaultOption !== "" && this.value === "" &&
                            html `
                                <option
                                    value="${this.defaultOption}"
                                    data-track-name="range-empty-option"
                                    >
                                    ${this.defaultOption}
                                </option>
                            `
                        }
                
                        ${this.values &&
                        Object.values(this.values).map((item: any, index: number) => {
                                // default track name
                                let optionTrackName = `range-${item}-option-${index}`;
                                return html `
                                    <option
                                        value="${item}"
                                        ?selected="${this.value === item}"
                                        data-track-name="${optionTrackName}"
                                    >
                                        ${item}
                                    </option>
                                `
                        })}
                </select>
            </div>
        `
    }

    render() {
        return html`${this.editModeRender()}`;
    }
}

import Element from "@skatejs/element";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

export const asWebComponent = (Component: React.Component, properties: any, name: string): void => {
    // avoid defining duplicate elements
    if (customElements.get && customElements.get(name)) return;

    customElements.define(
        name,
        class extends Element {
            static get props() {
                return properties;
            }

            disconnectedCallback() {
                unmountComponentAtNode(this.renderRoot);
            }

            renderer() {
                return render(
                    <Component {...this._props}>
                        <slot />
                    </Component>,
                    this.renderRoot,
                    this.render
                );
            }
        }
    );
};

export { props as properties } from "@skatejs/element";

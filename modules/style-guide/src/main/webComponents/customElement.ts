import { Constructor } from "lit-element";

export const customElement = (tagName: string) => (clazz: Constructor<HTMLElement>) => {
    if (!window.customElements.get(tagName)) {
        window.customElements.define(tagName, clazz);
    }
    return clazz as any;
};

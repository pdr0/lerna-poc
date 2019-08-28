import {fixture, html, oneEvent} from '@open-wc/testing-helpers';
import {Button} from "../../../../main/webComponents/button/Button";

describe("Button tests", () => {

    it("should render", async () => {
        const element: Button = await fixture(html`<ll-button>Data</ll-button>`);
        expect(element instanceof Button).toBe(true);
        expect(element.shadowRoot!.querySelector("button")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("a")).toBe(null);
        expect(element.shadowRoot!.querySelector("slot:not([name])")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("slot[name=secondary]")).not.toBe(null);
    });

    it("Should render a link", async () => {
        const element: Button = await fixture(`<ll-button href="https://lottoland.com" />`);
        expect(element.shadowRoot!.querySelector("button")).toBe(null);
        expect(element.shadowRoot!.querySelector("a")).not.toBe(null);
    });

    it("Should value be set", async () => {
        const txt = 'example';
        const element: Button = await fixture(html`<ll-button>${txt}</ll-button>`);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        const mainSlot: HTMLSlotElement = element.shadowRoot!.querySelector("slot:not([name])") as HTMLSlotElement;
        expect(mainSlot!.assignedNodes()[0]!.nodeValue).toBe(txt);
        expect(button.classList.contains('type-primary')).toBe(true);
        expect(button.classList.contains('size-normal')).toBe(true);
    });

    it("Should type be secondary", async () => {
        const element: Button = await fixture(html`<ll-button type='secondary'/>`);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        expect(button.classList.contains('type-secondary')).toBe(true);
    });

    it("Should type be primary cart without extension", async () => {
        const txt = 'base';
        const element: Button = await fixture(html`<ll-button type='primarycart'>${txt}</ll-button>`);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        const primarySlot: HTMLSlotElement = element.shadowRoot!.querySelector("slot:not([name])") as HTMLSlotElement;
        const secondarySlot: HTMLSlotElement = element.shadowRoot!.querySelector("slot[name=secondary]") as HTMLSlotElement;
        expect(primarySlot!.assignedNodes()[0]!.nodeValue).toBe(txt);
        expect(secondarySlot!.assignedNodes().length).toBe(0);
        expect(button.classList.contains('type-primarycart')).toBe(true);
    });

    it("Should type be secondary cart without extension", async () => {
        const txt = 'base';
        const element: Button = await fixture(html`<ll-button type='secondarycart'>${txt}</ll-button>`);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        const primarySlot: HTMLSlotElement = element.shadowRoot!.querySelector("slot:not([name])") as HTMLSlotElement;
        expect(primarySlot!.assignedNodes()[0]!.nodeValue).toBe(txt);
        expect(button.classList.contains('type-secondarycart')).toBe(true);
    });

    it("Should type be primary cart with extension", async () => {
        const txt = 'base';
        const extension = 'extension';
        const element: Button = await fixture(html`
            <ll-button type='primarycart'>${txt}<span slot='secondary'>${extension}</span></ll-button>
        `);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        const primarySlot: HTMLSlotElement = element.shadowRoot!.querySelector("slot:not([name])") as HTMLSlotElement;
        const secondarySlot: HTMLSlotElement = element.shadowRoot!.querySelector("slot[name=secondary]") as HTMLSlotElement;
        expect(primarySlot!.assignedNodes()[0]!.textContent).toBe(txt);
        expect(secondarySlot!.assignedNodes()[0]!.textContent).toBe(extension);
        expect(button.classList.contains('type-primarycart')).toBe(true);
        expect(button.classList.contains('type-primarycart-extended')).toBe(true);
    });

    it("Should size be small", async () => {
        const element: Button = await fixture(`<ll-button size='small'/>`);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        expect(button.classList.contains('size-small')).toBe(true);
    });

    it("Should size be large", async () => {
        const element: Button = await fixture(`<ll-button size='large'/>`);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        expect(button.classList.contains('size-large')).toBe(true);
    });

    it("Should size be normal", async () => {
        const element: Button = await fixture(`<ll-button size='normal'/>`);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        expect(button.classList.contains('size-normal')).toBe(true);
    });

    it("Should be disabled", async () => {
        const element: Button = await fixture(`<ll-button disabled/>`);
        const button: HTMLButtonElement = element.shadowRoot!.querySelector("button") as HTMLButtonElement;
        expect(button.disabled).toBe(true);
    });

    it("Should be triggered the onclick event", async () => {
        const element: Button = await fixture(`<ll-button />`);
        setTimeout(() => element.click());
        const { detail } = await oneEvent(element, 'click');
        expect(detail).not.toBe(null);
    });
});

import {fixture, oneEvent} from '@open-wc/testing-helpers';
import {TextInput} from "../../../../main/webComponents/textInput/TextInput";

describe("TextInput tests", () => {
    it("should render", async () => {
        const element: TextInput = await fixture('<ll-text-input></ll-text-input>');
        expect(element instanceof TextInput).toBe(true);
        expect(element.shadowRoot!.querySelector("input")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("label")).not.toBe(null);
    });

    it("Should label be set", async () => {
        const txt = 'example';
        const element: TextInput = await fixture(`<ll-text-input label="${txt}"></ll-text-input>`);
        const input = element.shadowRoot!.querySelector("input");
        const label = element.shadowRoot!.querySelector(".input-label");
        const placeholder = element.shadowRoot!.querySelector(".placeholder");
        expect(input).not.toBe(null);
        expect(label).not.toBe(null);
        expect(placeholder).not.toBe(null);
        expect(label!.textContent!.trim()).toBe(txt);
        expect(placeholder!.textContent!.trim()).toBe(txt);
    });

    it("Should value be set", async () => {
        const txt = 'example';
        const element: TextInput = await fixture(`<ll-text-input value="${txt}"></ll-text-input>`);
        const input = element.shadowRoot!.querySelector("input");
        expect(input).not.toBe(null);
        expect(input!.value).toBe(txt);
    });

    it("Should inline label be set", async () => {
        const txt = 'example label';
        const element: TextInput = await fixture(`<ll-text-input inlineLabel="${txt}"></ll-text-input>`);
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("focus"));
        await element.updateComplete;
        const span = element.shadowRoot!.querySelector(".help-text")!;
        expect(span.classList.contains("fadeOut")).toBe(false);
        expect(span).not.toBeNull();
        expect(span.textContent).toBe(txt);
    });

    it("Should remove inline label on blur after animation ends", async () => {
        const txt = 'example label';
        const element: TextInput = await fixture(`<ll-text-input inlineLabel="${txt}"></ll-text-input>`);
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("focus"));
        await element.updateComplete;
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("blur"));
        let span = element.shadowRoot!.querySelector(".help-text");
        span!.dispatchEvent(new AnimationEvent("animationend", { animationName: "fadeOut" }));
        await element.updateComplete;
        span = element.shadowRoot!.querySelector(".help-text");
        expect(span).toBeNull();
    });

    it("Should show invalid inline label always if the field is invalid", async () => {
        const txt = 'example label';
        const element: TextInput = await fixture(`<ll-text-input status="invalid" invalidInlineLabel="${txt}"></ll-text-input>`);
        await element.updateComplete;
        const span = element.shadowRoot!.querySelector(".help-text")!;
        expect(span).not.toBeNull();
        expect(span.textContent).toBe(txt);
    });

    it("Should show valid inline label always if the field is focused, valid and dirty", async () => {
        const txt = 'example label';
        const element: TextInput = await fixture(`<ll-text-input dirty status="valid" validInlineLabel="${txt}"></ll-text-input>`);
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("focus"));
        await element.updateComplete;
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("blur"));
        await element.updateComplete;
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("focus"));
        await element.updateComplete;
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("blur"));
        await element.updateComplete;
        const span = element.shadowRoot!.querySelector(".help-text")!;
        expect(span.classList.contains("fadeOut")).toBe(true);
    });

    it("Should not start exit animation if field is invalid", async () => {
        const txt = 'example label';
        const element: TextInput = await fixture(`<ll-text-input status="invalid" invalidInlineLabel="${txt}"></ll-text-input>`);
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("focus"));
        await element.updateComplete;
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new Event("blur"));
        await element.updateComplete;
        const span = element.shadowRoot!.querySelector(".help-text")!;
        expect(span.classList.contains("fadeOut")).toBe(false);
    });

    it("Should dispatch a change event when the internal input changes", async () => {
        const element: TextInput = await fixture(`<ll-text-input></ll-text-input>`);
        const input = element.shadowRoot!.querySelector("input");
        setTimeout(() => input!.dispatchEvent(new Event("change")));
        const { detail } = await oneEvent(element, 'change');
        expect(detail).not.toBe(null);
    });

    it("Should have the property status by default", async () => {
        const element: TextInput = await fixture(`<ll-text-input></ll-text-input>`);
        expect(element.getAttribute('status')).toBe('default');
    });

    it("Should have the property status with the value invalid", async () => {
        const status = 'invalid';
        const element: TextInput = await fixture(`<ll-text-input status="${status}"></ll-text-input>`);
        expect(element.getAttribute('status')).toBe(status);
    });

    it("Should have the property status with the value valid", async () => {
        const status = 'valid';
        const element: TextInput = await fixture(`<ll-text-input status="${status}"></ll-text-input>`);
        expect(element.getAttribute('status')).toBe(status);
    });

    it("Should have the property status with by default with a non valid value", async () => {
        const status = 'unknown';
        const element: TextInput = await fixture(`<ll-text-input status="${status}"></ll-text-input>`);
        expect(element.getAttribute('status')).toBe('default');
    });
});

import {fixture} from '@open-wc/testing-helpers';
import {Callout} from "../../../../main/webComponents/callout/Callout";

describe("Callout tests", () => {
    it("should render", async () => {
        const element: Callout = await fixture('<ll-callout></ll-callout>');

        expect(element instanceof Callout).toBe(true);
        expect(element.shadowRoot!.querySelector(".main-container")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("ll-typography")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("slot")).not.toBe(null);
    });

    it("should render the passed text", async () => {
        const element: Callout = await fixture('<ll-callout text="test"></ll-callout>');

        expect(element.shadowRoot!.querySelector("ll-typography")!.textContent).toBe("test");
    });

    it("should render slot content", async () => {
        const element: Callout = await fixture('<ll-callout text="test"><div class="test"></div></ll-callout>');

        expect(element.shadowRoot!.querySelector("slot")!.assignedElements()!.shift()).not.toBe(undefined);
    });
});

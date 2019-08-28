import { RadioAlt } from "../../../../main/webComponents/radios/RadioAlt";

describe("RadioAlt tests", () => {
    let element: RadioAlt;

    beforeEach(async () => {
        element = document.createElement("ll-radio-alt") as RadioAlt;
        document.body.appendChild(element);
        await element.updateComplete;
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    it("Should render", async () => {
        expect(element instanceof RadioAlt).toBe(true);
        expect(element.shadowRoot!.querySelector("input")).not.toBe(null);
        expect(element.shadowRoot!.querySelector(".label")).not.toBe(null);
    });

    it("Should checked internal input if checked attribute changes", async () => {
        element.checked = true;
        await element.updateComplete;
        expect(element.shadowRoot!.querySelector("input")!.checked).toBe(true);
        element.checked = false;
        await element.updateComplete;
        expect(element.shadowRoot!.querySelector("input")!.checked).toBe(false);
        element.setAttribute("value", "test");
        await element.updateComplete;
    });

    it("Should dispatch a change event when the internal input changes", async (done) => {
        element.addEventListener("change", (event) => {
            expect(event.target instanceof RadioAlt).toBe(true);
            done();
        });
        element.shadowRoot!.querySelector("input")!.dispatchEvent(new CustomEvent("change"));
    });
});

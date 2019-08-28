import {fixture} from '@open-wc/testing-helpers';
import {NumberInput} from "../../../../main/webComponents/numberInput/NumberInput";
import sinon from "sinon";

describe("NumberInput tests", () => {
    it("should render", async () => {
        const element: NumberInput = await fixture('<ll-number-input></ll-number-input>');

        expect(element instanceof NumberInput).toBe(true);
        expect(element.shadowRoot!.querySelector("input")).not.toBe(null);
    });

    it("Should not allow to put a lower number than the minimum", async () => {
        const element: NumberInput = await fixture('<ll-number-input min="3" max="9"></ll-number-input>');
        const event = new KeyboardEvent("keydown", {
            "key": "Digit2",
            "code": "Digit2"
        });
        const input = element.shadowRoot!.querySelector("input")!;

        input.dispatchEvent(event);
        input.dispatchEvent(new Event("focusout"));

        expect(element.shadowRoot!.querySelector("input")!.value).toBe("3");
    });

    it("Should not allow to put a higher number than the maximum", async () => {
        const element: NumberInput = await fixture('<ll-number-input min="3" max="8"></ll-number-input>');
        const event = new KeyboardEvent("keydown", {
            "key": "Digit9",
            "code": "Digit9"
        });
        const input = element.shadowRoot!.querySelector("input")!;

        input.dispatchEvent(event);
        input.dispatchEvent(new Event("focusout"));

        expect(element.shadowRoot!.querySelector("input")!.value).toBe("8");
    });

    it("Should render the minimum number if required is true", async () => {
        const element: NumberInput = await fixture('<ll-number-input min="3" max="8" required="true"></ll-number-input>');
        const input = element.shadowRoot!.querySelector("input")!;

        expect(input.value).toBe("3");
    });

    it("Should not render the minimum number if required is false", async () => {
        const element: NumberInput = await fixture('<ll-number-input min="3" max="8"></ll-number-input>');
        const input = element.shadowRoot!.querySelector("input")!;

        expect(input.value).toBe("");
    });

    it("Should not allow to put a minimum higher than the maximum", async () => {
        const element: NumberInput = await fixture('<ll-number-input min="9" max="8"></ll-number-input>');
        const input = element.shadowRoot!.querySelector("input")!;

        expect(input.min).toBe("9");
        expect(input.max).toBe("9");
    });

    it("Should put a 0 if the minimum number is less than 0", async () => {
        const element: NumberInput = await fixture('<ll-number-input min="-9" max="8"></ll-number-input>');
        const input = element.shadowRoot!.querySelector("input")!;

        expect(input.min).toBe("0");
    });

    it("Should not update value the value if the value received is the same as the stored one", async () => {
        const handler = sinon.spy();
        const element: NumberInput = await fixture(`<ll-number-input></ll-number-input>`);
        element.addEventListener("change", handler);

        element.setAttribute("value", "2");
        element.setAttribute("value", "2");

        expect(handler.calledOnce).toBe(true);
    });
});

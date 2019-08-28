import {fixture, oneEvent} from '@open-wc/testing-helpers';
import {QuantitySelector} from "../../../../main/webComponents/quantitySelector/QuantitySelector";
import sinon from 'sinon';

describe("QuantitySelector tests", () => {
    it("should render", async () => {
        const element: QuantitySelector = await fixture('<ll-quantity-selector></ll-quantity-selector>');

        expect(element instanceof QuantitySelector).toBe(true);
        expect(element.shadowRoot!.querySelector(".main-container")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("ll-control-minus")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("ll-number-input")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("ll-control-plus")).not.toBe(null);
    });

    it("should increment the value stored if click is done", async () => {
        const element: QuantitySelector = await fixture('<ll-quantity-selector></ll-quantity-selector>');

        setTimeout(() => element.shadowRoot!.querySelector("ll-control-plus")!.dispatchEvent(new Event("click")));
        const { detail } = await oneEvent(element, 'change');

        expect(detail.value).toBe(2);
    });

    it("should not increment the value if click is done and the value passed is less than the minimum", async () => {
        const handler = sinon.spy();
        const element: QuantitySelector = await fixture('<ll-quantity-selector min="1"></ll-quantity-selector>');
        element.addEventListener("change", handler);

        element.shadowRoot!.querySelector("ll-control-minus")!.dispatchEvent(new Event("click"));
        await element.updateComplete;

        expect(handler.callCount).toBe(0);
    });

    it("should not increment the value if click is done and the value passed is more than the maximum", async () => {
        const handler = sinon.spy();
        const element: QuantitySelector = await fixture('<ll-quantity-selector max="1"></ll-quantity-selector>');
        element.addEventListener("change", handler);

        element.shadowRoot!.querySelector("ll-control-plus")!.dispatchEvent(new Event("click"));
        await element.updateComplete;

        expect(handler.callCount).toBe(0);
    });
});

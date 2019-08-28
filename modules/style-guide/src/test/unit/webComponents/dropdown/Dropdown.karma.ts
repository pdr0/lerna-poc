import {fixture, html} from '@open-wc/testing-helpers';
import { Dropdown } from "../../../../main/webComponents/dropdown/Dropdown";

describe("Dropdown tests", () => {

    it("should render", async () => {
        const element: Dropdown = await fixture(html`<ll-lottery-dropdown values='["0-1", "2-3", "4-5", "6-7", "8-9"]'></ll-lottery-dropdown>`);
        expect(element instanceof Dropdown).toBe(true);
        expect(element.shadowRoot!.querySelector("select")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("option")).not.toBe(null);
        expect(element.shadowRoot!.querySelector(".dropdown")).not.toBe(null);
    });

    it("should have value in option", async () => {
        const element: Dropdown = await fixture(html`<ll-lottery-dropdown values='["0-5"]'></ll-lottery-dropdown>`);
        expect(element instanceof Dropdown).toBe(true);
        // @ts-ignore
        expect(element.shadowRoot!.querySelector("option").value).toBe("0-5");
    });

    it("should have empty option", async () => {
        const element: Dropdown = await fixture(html`<ll-lottery-dropdown values='["0-5"]' defaultOption="Choose"></ll-lottery-dropdown>`);
        expect(element instanceof Dropdown).toBe(true);
        // @ts-ignore
        expect(element.shadowRoot!.querySelector("option").value).toBe("Choose");
    });

    it("Should be disabled", async () => {
        const element: Dropdown = await fixture(html`<ll-lottery-dropdown values='["0-5"]' disabled></ll-lottery-dropdown>`);
        const select: HTMLSelectElement = element.shadowRoot!.querySelector("select") as HTMLSelectElement;
        const disabled: any = select.attributes.getNamedItem('disabled');
        expect(disabled).not.toBe(null);
    });

    it("Should be required", async () => {
        const element: Dropdown = await fixture(html`<ll-lottery-dropdown values='["0-5"]' required></ll-lottery-dropdown>`);
        const select: HTMLSelectElement = element.shadowRoot!.querySelector("select") as HTMLSelectElement;
        const required: any = select.attributes.getNamedItem('required');
        expect(required).not.toBe(null);
    });

    it("should have preselected", async () => {
        const element: Dropdown = await fixture(html`<ll-lottery-dropdown values='["0-5", "0-2"]' value='0-2'></ll-lottery-dropdown>`);
        expect(element instanceof Dropdown).toBe(true);
        const select: HTMLSelectElement = element.shadowRoot!.querySelector("select") as HTMLSelectElement;
        const options = select.getElementsByTagName('option');
        const selected: any = options[1].getAttribute("selected");
        expect(selected).not.toBe(null);
    });
});

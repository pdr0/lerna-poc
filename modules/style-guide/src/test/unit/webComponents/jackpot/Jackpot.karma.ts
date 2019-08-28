import {fixture} from '@open-wc/testing-helpers';
import {Jackpot} from "../../../../main/webComponents/jackpot/Jackpot";


describe("Jackpot tests", () => {
    it("should render", async () => {
        const element: Jackpot = await fixture(
            '<ll-jackpot amount="34" currency="$" units="million" size="md" responsive>LOTTO Name</ll-jackpot>');
        expect(element instanceof Jackpot).toBe(true);
        const container: HTMLElement | null = element.shadowRoot!.querySelector(".container");
        const amount: HTMLElement | null = element.shadowRoot!.querySelector(".amount");
        const currency: HTMLElement | null = element.shadowRoot!.querySelector(".currency");
        const unit: HTMLElement | null = element.shadowRoot!.querySelector(".unit");
        const lottery: HTMLElement | null = element.shadowRoot!.querySelector(".lottery");
        expect(container).toBeDefined();
        expect(amount).toBeDefined();
        expect(currency).toBeDefined();
        expect(unit).toBeDefined();
        expect(lottery).toBeDefined();
        expect(container!.className).toContain('md');
        expect(container!.className).toContain('responsive');
        expect(amount!.innerText).toBe('34');
        expect(currency!.innerText).toBe('$');
        expect(unit!.innerText).toBe('million');
    });

    it("should render default state", async () => {
        const element: Jackpot = await fixture('<ll-jackpot />');
        expect(element instanceof Jackpot).toBe(true);
        const container: HTMLElement | null = element.shadowRoot!.querySelector(".container");
        const unit: HTMLElement | null = element.shadowRoot!.querySelector(".unit");
        expect(container).toBeDefined();
        expect(unit).toBeDefined();
        expect(container!.className).toContain('lg');
        expect(container!.className).not.toContain('responsive');
        expect(unit!.innerText).toBe(' ');
    });


    it("should not render tags for amount, currency, unit, lottery when size \"xs\", \"sm\"", async () => {
        let element: Jackpot = await fixture(
            '<ll-jackpot size="xs" responsive>LOTTO Name</ll-jackpot>');
        expect(element instanceof Jackpot).toBe(true);
        let amount: HTMLElement | null = element.shadowRoot!.querySelector(".amount");
        let currency: HTMLElement | null = element.shadowRoot!.querySelector(".currency");
        let unit: HTMLElement | null = element.shadowRoot!.querySelector(".unit");
        let lottery: HTMLElement | null = element.shadowRoot!.querySelector(".lottery");
        expect(amount).toBeNull();
        expect(currency).toBeNull();
        expect(unit).toBeNull();
        expect(lottery).toBeNull();

        element = await fixture('<ll-jackpot size="sm" responsive>LOTTO Name</ll-jackpot>');
        expect(element instanceof Jackpot).toBe(true);
        amount = element.shadowRoot!.querySelector(".amount");
        currency = element.shadowRoot!.querySelector(".currency");
        unit = element.shadowRoot!.querySelector(".unit");
        lottery = element.shadowRoot!.querySelector(".lottery");
        expect(amount).toBeNull();
        expect(currency).toBeNull();
        expect(unit).toBeNull();
        expect(lottery).toBeNull();
    });


    it("should not render left part of component if amount is not passed", async () => {
        const element: Jackpot = await fixture(
            '<ll-jackpot currency="$" units="million" size="md">LOTTO Name</ll-jackpot>');
        expect(element instanceof Jackpot).toBe(true);
        const left: HTMLElement | null = element.shadowRoot!.querySelector(".left");
        expect(left).toBeNull();
    });


    it("should not render reverted version if reverse  passed (size \"xs\", \"sm\")", async () => {
        let element: Jackpot = await fixture(
            '<ll-jackpot amount="34" currency="$" units="million" size="sx">LOTTO Name</ll-jackpot>');
        expect(element instanceof Jackpot).toBe(true);
        let container: HTMLElement | null = element.shadowRoot!.querySelector(".container");
        expect(container!.innerText.replace(/\n/g, "")).toBe("$34million");

        element = await fixture(
            '<ll-jackpot amount="34" currency="$" units="million" size="sx" reverse>LOTTO Name</ll-jackpot>');
        expect(element instanceof Jackpot).toBe(true);
        container = element.shadowRoot!.querySelector(".container");
        expect(container!.innerText.replace(/\n/g, "")).toBe("34million$");
    });


    it("should not render reverted version if reverse  passed (size \"md\", \"lg\", \"xl\")", async () => {
        let element: Jackpot = await fixture(
            '<ll-jackpot amount="34" currency="$" units="million" size="md">LOTTO Name</ll-jackpot>');
        expect(element instanceof Jackpot).toBe(true);
        let currency: HTMLElement | null = element.shadowRoot!.querySelector(".left .currency");
        expect(currency).toBeDefined();

        element = await fixture(
            '<ll-jackpot amount="34" currency="$" units="million" size="md" reverse>LOTTO Name</ll-jackpot>');
        expect(element instanceof Jackpot).toBe(true);
        currency = element.shadowRoot!.querySelector(".right .currency");
        expect(currency).toBeDefined();
    });
});
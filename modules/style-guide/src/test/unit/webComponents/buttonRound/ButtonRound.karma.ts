import {fixture} from '@open-wc/testing-helpers';
import {ButtonRound} from "../../../../main/webComponents/buttonRound/ButtonRound";

describe("ButtonRound tests", () => {
    it("should render", async () => {
        const element: ButtonRound = await fixture('<ll-button-round></ll-button-round>');

        expect(element instanceof ButtonRound).toBe(true);
        expect(element.shadowRoot!.querySelector("button")).not.toBe(null);
    });

    it("should render predefined options from predefined buttons", async () => {
        const quickPickButton: ButtonRound = await fixture('<ll-button-round type="quickPick"></ll-button-round>');

        const button = quickPickButton.shadowRoot!.querySelector("button")!;
        const icon = button.querySelector("ll-icon")!;
        expect(quickPickButton instanceof ButtonRound).toBe(true);
        expect(button.classList.contains("with-shadow")).toBe(true);
        expect(button.classList.contains("with-primary-background")).toBe(true);
        expect(icon.classList.contains("white")).toBe(true);
        expect(icon.getAttribute("size")).toBe("regular");
        expect(icon.getAttribute("name")).toBe("dice-2");
    });
});

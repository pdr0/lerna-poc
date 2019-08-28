import { Tooltip } from "../../../../main/webComponents/tooltip/Tooltip";
import { fixture } from "@open-wc/testing-helpers";

describe("Tooltip tests", () => {
    it("Should render", async () => {
        const element: Tooltip = await fixture(`<ll-tooltip><div class="test">test</div>/ll-tooltip>`);
        expect(element instanceof Tooltip).toBe(true);
        expect(element.shadowRoot!.querySelector("ll-icon")).not.toBeNull();
        expect(element.shadowRoot!.querySelector(".content")).not.toBeNull();
        expect(element.querySelector(".test")).not.toBeNull();
    });
});

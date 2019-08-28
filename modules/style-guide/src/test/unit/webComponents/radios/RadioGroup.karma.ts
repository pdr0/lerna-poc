import { RadioGroup } from "../../../../main/webComponents/radios/RadioGroup";
import { RadioAlt } from "../../../../main/webComponents/radios/RadioAlt";
import "../../../../main/webComponents/radios/RadioAlt";

describe("RadioGroup tests", () => {
    let testContainer: HTMLDivElement;
    beforeAll(() => {
        testContainer = document.createElement("div");
        testContainer.classList.add("test-setup");
        document.body.appendChild(testContainer);
    });

    beforeEach(async () => {
        testContainer.innerHTML = "";
    });

    afterAll(() => {
        document.body.removeChild(testContainer);
    });

    it("Should render", async () => {
        const element = document.createElement("ll-radio-group") as RadioGroup;
        expect(element instanceof RadioGroup).toBe(true);
        testContainer.innerHTML = "<ll-radio-group></ll-radio-group>";
    });

    it("Should update ll-radio-alt correctly", async () => {
        testContainer.innerHTML = `
            <ll-radio-group>
                <ll-radio-alt class="radio1" value="1">1</ll-radio-alt>
                <ll-radio-alt class="radio2" value="2" checked>2</ll-radio-alt>
                <ll-radio-alt class="radio3" value="3">3</ll-radio-alt>
            </ll-radio-group>`;
        const radioGroup = document.querySelector("ll-radio-group")! as RadioGroup;
        const radio1 = document.querySelector(".radio1")! as RadioAlt;
        const radio2 = document.querySelector(".radio2")! as RadioAlt;
        await radioGroup.updateComplete;
        radioGroup.dispatchEvent(new CustomEvent("change", { detail: { value: "1" } }));
        await radioGroup.updateComplete;
        expect(radio1!.getAttribute("checked")).toBe("");
        expect(radio2!.getAttribute("checked")).toBeNull();
    });
});

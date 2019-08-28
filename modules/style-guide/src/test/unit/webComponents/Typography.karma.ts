import { Typography } from "../../../main/webComponents/typography/Typography";
import "../../../main/webComponents/typography/Typography";

describe("Typography tests", () => {
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

    it("Should render a typography specifying only the size", async () => {
        testContainer.innerHTML = "<ll-typography size='h1'>Headline</ll-typography>";
        const element = testContainer.firstChild! as Typography;
        expect(element.textContent).toBe("Headline");
        expect(element.shadowRoot!.querySelector("h1")).not.toBeNull();
        expect(element.shadowRoot!.querySelector(".h1")).not.toBeNull();
    });

    it("Should render a h7 typography with a default tag", () => {
        testContainer.innerHTML = "<ll-typography size='h7'>Headline</ll-typography>";
        const element = testContainer.firstChild! as Typography;
        expect(element.shadowRoot!.querySelector("h6")).not.toBeNull();
        expect(element.shadowRoot!.querySelector(".h7")).not.toBeNull();
    });

    it("Should render a specific tag with a specific size", () => {
        testContainer.innerHTML = "<ll-typography size='h1' tag='h5'>Headline</ll-typography>";
        const element = testContainer.firstChild! as Typography;
        expect(element.shadowRoot!.querySelector("h5")).not.toBeNull();
        expect(element.shadowRoot!.querySelector(".h1")).not.toBeNull();
    });

    it("Should render a paragraph by default", () => {
        testContainer.innerHTML = "<ll-typography>Test</ll-typography>";
        const element = testContainer.firstChild! as Typography;
        expect(element.shadowRoot!.querySelector("p")).not.toBeNull();
        expect(element.shadowRoot!.querySelector(".p")).not.toBeNull();
    });
});

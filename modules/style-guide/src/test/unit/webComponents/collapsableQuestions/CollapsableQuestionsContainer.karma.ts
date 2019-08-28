import {fixture} from '@open-wc/testing-helpers';
import {CollapsableQuestionsContainer} from "../../../../main/webComponents/collapsableQuestions/CollapsableQuestionsContainer";
import {CollapsableQuestion} from "../../../../main/webComponents/collapsableQuestions/CollapsableQuestion";

describe("CollapsableQuestionsContainer tests", () => {
    const screenXS = 320;
    const screenSM = 768;
    const collapsableContainer = '<ll-collapsable-questions-container></ll-collapsable-questions-container>';

    async function getFixturesWithSlotNodes(collapsed: Boolean) {
        const elementContainer: CollapsableQuestionsContainer = await fixture(collapsableContainer);
        const slotElement: CollapsableQuestion = await fixture(`<ll-collapsable-question />`);

        if (collapsed) {
            slotElement.setAttribute("collapsed", "true");
        }

        elementContainer.appendChild(slotElement);
        elementContainer.appendChild(slotElement.cloneNode());
        elementContainer.appendChild(slotElement.cloneNode());

        return elementContainer;
    }

    it("should render", async () => {
        const element: CollapsableQuestionsContainer = await fixture(collapsableContainer);

        expect(element instanceof CollapsableQuestionsContainer).toBe(true);
        expect(element.shadowRoot!.querySelector("div")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("slot")).not.toBe(null);
    });

    it("should expand if a click is triggered in a collapsed container", async () => {
        const previousInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: screenXS});
        const element: CollapsableQuestionsContainer = await fixture(collapsableContainer);
        const div = element.shadowRoot!.querySelector("div")!;
        const previousClassList = Array.from(div.classList);

        div.dispatchEvent(new Event("click"));
        await element.updateComplete;

        expect(previousClassList.includes("expanded")).toBe(false);
        expect(div.classList.contains("expanded")).toBe(true);
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: previousInnerWidth});
    });

    it("should collapse if a click is triggered in a expanded container", async () => {
        const previousInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: screenXS});
        const element: CollapsableQuestionsContainer = await fixture(collapsableContainer);
        const div = element.shadowRoot!.querySelector("div")!;
        div.dispatchEvent(new Event("click"));
        await element.updateComplete;
        const previousClassList = Array.from(div.classList);

        div.dispatchEvent(new Event("click"));
        await element.updateComplete;

        expect(previousClassList.includes("collapsed")).toBe(false);
        expect(div.classList.contains("collapsed")).toBe(true);
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: previousInnerWidth});
    });

    it("should collapse if a click is triggered and innerWidth is greater or equal to 768", async () => {
        const previousInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: screenSM});
        const element: CollapsableQuestionsContainer = await fixture(collapsableContainer);
        const div = element.shadowRoot!.querySelector("div")!;
        div.dispatchEvent(new Event("click"));
        await element.updateComplete;
        const previousClassList = Array.from(div.classList);

        div.dispatchEvent(new Event("click"));
        await element.updateComplete;

        expect(previousClassList.includes("expanded")).toBe(true);
        expect(div.classList.contains("expanded")).toBe(true);
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: previousInnerWidth});
    });

    it("should remove attribute collapsed from child nodes if a click is triggered and it was collapsed at that time", async () => {
        const previousInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: screenXS});
        const element: CollapsableQuestionsContainer = await getFixturesWithSlotNodes(true);
        const div = element.shadowRoot!.querySelector("div")!;
        const previousAttributesLength = element.querySelector("ll-collapsable-question")!.attributes.length;
        const previousClassList = Array.from(div.classList);

        div.dispatchEvent(new Event("click"));
        await element.updateComplete;

        expect(previousClassList.includes("collapsed")).toBe(true);
        expect(div.classList.contains("expanded")).toBe(true);
        expect(previousAttributesLength).toBe(1);
        expect(element.querySelector("ll-collapsable-question")!.attributes.length).toBe(0);
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: previousInnerWidth});
    });

    it("should add attribute collapsed in child nodes if a click is triggered and it was expanded at that time", async () => {
        const previousInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: screenXS});
        const element: CollapsableQuestionsContainer = await getFixturesWithSlotNodes(false);
        const div = element.shadowRoot!.querySelector("div")!;
        div.dispatchEvent(new Event("click"));
        await element.updateComplete;
        const previousAttributesLength = element.querySelector("ll-collapsable-question")!.attributes.length;
        const previousClassList = Array.from(div.classList);

        div.dispatchEvent(new Event("click"));
        await element.updateComplete;

        expect(previousClassList.includes("expanded")).toBe(true);
        expect(div.classList.contains("collapsed")).toBe(true);
        expect(previousAttributesLength).toBe(0);
        expect(element.querySelector("ll-collapsable-question")!.attributes.length).toBe(1);
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: previousInnerWidth});
    });

    it("should expand if a resize is done into a 768 or bigger width", async () => {
        const previousInnerWidth = window.innerWidth;
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: screenXS});
        const element: CollapsableQuestionsContainer = await fixture(collapsableContainer);
        const div = element.shadowRoot!.querySelector("div")!;
        const previousClassList = Array.from(div.classList);

        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: screenSM});
        window.dispatchEvent(new Event('resize'));
        await element.updateComplete;

        expect(previousClassList.includes("expanded")).toBe(false);
        expect(div.classList.contains("expanded")).toBe(true);
        Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: previousInnerWidth});
    });
});

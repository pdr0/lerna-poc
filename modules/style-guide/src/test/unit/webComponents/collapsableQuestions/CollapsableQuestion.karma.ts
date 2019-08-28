import {fixture} from '@open-wc/testing-helpers';
import {CollapsableQuestion} from "../../../../main/webComponents/collapsableQuestions/CollapsableQuestion";

describe("CollapsableQuestion tests", () => {
    it("should render", async () => {
        const element: CollapsableQuestion = await fixture('<ll-collapsable-question></ll-collapsable-question>');

        expect(element instanceof CollapsableQuestion).toBe(true);
        expect(element.shadowRoot!.querySelector("slot[name=icon]")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("slot[name=title]")).not.toBe(null);
        expect(element.shadowRoot!.querySelector("slot[name=description]")).not.toBe(null);
    });
});

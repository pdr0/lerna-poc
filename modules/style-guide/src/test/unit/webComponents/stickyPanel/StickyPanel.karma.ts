import {fixture, html} from '@open-wc/testing-helpers';
import {StickyPanel} from "../../../../main/webComponents/stickyPanel/StickyPanel";

describe("StickyPanel tests", () => {

    const toPixels = (value:Number) => value + 'px';

    it("should render as hidden", async () => {
        const data = `Paquito chocolatero`;
        const element: StickyPanel = /** @type {StickyPanel} */ (await fixture(html`
            <ll-sticky-panel>
                ${data}
            </ll-sticky-panel>
        `));
        const content:HTMLElement = element!.shadowRoot!.querySelector("div.content") as HTMLElement;
        const style:CSSStyleDeclaration = element.style as CSSStyleDeclaration;
        expect(element instanceof StickyPanel).toBe(true);
        expect(element.state).toBe('hidden');
        expect(style.getPropertyValue(`--height-${element.state}`)).toBe('');
        expect(content.innerHTML).not.toBe(data);
    });

    it("should render as collapsed", async () => {
        const element: StickyPanel = /** @type {StickyPanel} */ (await fixture(html`
            <ll-sticky-panel state="collapsed">
                <div style="height: 150px">Paquito chocolatero</div>
            </ll-sticky-panel>
        `));
        const content:HTMLElement = element!.shadowRoot!.querySelector("slot") as HTMLElement;
        const style:CSSStyleDeclaration = element.style as CSSStyleDeclaration;
        expect(element.state).toBe('collapsed');
        expect(style.getPropertyValue(`--max-content`)).toBe('');
        expect(style.getPropertyValue(`--height-${element.state}`)).toBe(toPixels(content.clientHeight + 14));
    });

    it("should render as expanded", async () => {
        const element: StickyPanel = /** @type {StickyPanel} */ (await fixture(html`
            <ll-sticky-panel state="expanded">
                <div style="height: 200px">Paquito chocolatero</div>
            </ll-sticky-panel>
        `));
        expect(element.state).toBe('expanded');
    });
});

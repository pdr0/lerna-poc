declare module '*.lit.scss' {
    import { CSSResult } from "lit-element";
    const css: CSSResult;
    export default css;
}

declare module '*.scss' {
    const css: string;
    export default css;
}

declare module '@open-wc/testing-helpers';
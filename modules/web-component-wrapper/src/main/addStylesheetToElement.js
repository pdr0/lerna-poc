// @flow

const addStylesheetToElement = (css: string, element: HTMLElement | ShadowRoot) => {
    if (css) {
        const style = document.createElement('style');
        style.innerHTML = css;
        element.appendChild(style);
    }
};

export default addStylesheetToElement;
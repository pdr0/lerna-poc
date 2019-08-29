// @flow

const addWebComponentConfigToElement = (element: HTMLElement | ShadowRoot) => {
    if (window && window.ll && window.ll.webComponentConfig) {
        const config = window.ll.webComponentConfig;
        const configScript = document.createElement('script');
        configScript.innerHTML = `var webComponentConfig = ${JSON.stringify(config)}`;
        element.appendChild(configScript);
    }
};

export default addWebComponentConfigToElement;
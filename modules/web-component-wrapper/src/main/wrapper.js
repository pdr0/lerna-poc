// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import addStylesheetToElement from './addStylesheetToElement';
import addWebComponentConfigToElement from './addWebComponentConfigToElement';

export const renderReactComponent = (Component: any, textContent: string, target: any, props: any, hasPropTypes: boolean, renderWithoutProps: boolean = false) => {
    if (!renderWithoutProps && hasPropTypes && (!props || Object.keys(props).length === 0)) {
        return null;
    }
    ReactDOM.render((
        <Component {...props}>
            {textContent}
        </Component>
    ), target);
};

const wrapper = (name: string, componentFactory: any, css: string | Array<string>, renderWithoutProps: boolean = false) => {
    // TODO: Write integration test (unable to unit test custom elements)
    const Clazz = class extends HTMLElement {
        mountPoint;
        props = {};
        propTypes: Array<string> = [];
        textToAppend;
        componentConnected = false;
        scheduleRender = false;
        reactComponent;
        componentHasPropTypes;

        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode: 'open'});
            this.reactComponent = componentFactory(this);

            if (typeof css === 'string') {
                addStylesheetToElement(css, shadowRoot);
            } else {
                css.forEach((sheet) => {
                    addStylesheetToElement(sheet, shadowRoot);
                });
            }
            addWebComponentConfigToElement(shadowRoot);

            const renderTarget = document.createElement('div');
            renderTarget.className = 'll-scoped-components';
            this.mountPoint = shadowRoot.appendChild(renderTarget);

            const componentPropTypes = this.reactComponent.customElementProps || this.reactComponent.propTypes || (this.reactComponent.type && this.reactComponent.type.propTypes) || {};
            if (!this.reactComponent.customElementProps && Object.keys(componentPropTypes).length > 0) {
                throw new Error("You are passing properties as propTypes this will not work in production. Use customElementProps instead");
            }

            if (componentPropTypes instanceof Array) {
                this.propTypes = componentPropTypes;
            } else {
                const {children, ...propTypes} = componentPropTypes;
                this.propTypes = Object.keys(propTypes);
            }

            this.componentHasPropTypes = this.propTypes.length > 0;

            for (let name of this.propTypes) {
                Object.defineProperty(this, name, {
                    set(newValue) {
                        this.props[name] = newValue;
                        if (this.componentConnected && this.scheduleRender === false) {
                            this.scheduleRender = true;
                            setTimeout(() => {
                                this.scheduleRender = false;
                                renderReactComponent(this.reactComponent, this.textToAppend, this.mountPoint, this.props, this.componentHasPropTypes, renderWithoutProps);
                            }, 0);
                        }
                    }
                });
            }
        }

        connectedCallback() {
            this.componentConnected = true;
            this.textToAppend = this.getAttribute('innerContent') || '';
            for (let name of this.propTypes) {
                const attribute = this.getAttribute(name);
                if (attribute !== null) {
                    this.props[name] = attribute;
                }
            }
            renderReactComponent(this.reactComponent, this.textToAppend, this.mountPoint, this.props, this.componentHasPropTypes, renderWithoutProps);
            retargetEvents(this.mountPoint);
        }

        disconnectedCallback() {
            this.componentConnected = false;
            ReactDOM.unmountComponentAtNode(this.mountPoint);
        }
    };

    customElements.define(`ll-${name}`, Clazz);
};

export default wrapper;
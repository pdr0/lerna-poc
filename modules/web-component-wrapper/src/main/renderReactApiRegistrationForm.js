// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import addWebComponentConfigToElement from './addWebComponentConfigToElement';

export const renderReactComponent = (Component: any, textContent: string, target: any, props: any) => {
    ReactDOM.render((
        <Component {...props}>
            {textContent}
        </Component>
    ), target);
};

/**
 * This can be removed, once we use SkateJS for "wrapping" the
 * ApiRegistrationForm into a WebComponent.
 *
 * @param name The name of the WebComponent tag
 * @param componentFactory an parameterless function that returns the React component to wrap
 */
const renderReactApiRegistrationForm = (name: string, componentFactory: any) => {
    const Clazz = class extends HTMLElement {
        mountPoint;
        props = {};
        textToAppend;
        componentConnected = false;
        scheduleRender = false;
        reactComponent;

        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode: 'open'});
            this.reactComponent = componentFactory(this);

            addWebComponentConfigToElement(shadowRoot);

            this.mountPoint = shadowRoot;

            const componentPropTypes = this.reactComponent.customElementProps || this.reactComponent.propTypes || (this.reactComponent.type && this.reactComponent.type.propTypes) || {};
            if (!this.reactComponent.customElementProps && Object.keys(componentPropTypes).length > 0) {
                throw new Error("You are passing properties as propTypes this will not work in production. Use customElementProps instead");
            }

            let customElementProps;
            if (componentPropTypes instanceof Array) {
                customElementProps = componentPropTypes;
            } else {
                const {children, ...propTypes} = componentPropTypes;
                customElementProps = Object.keys(propTypes);
            }

            if (customElementProps.indexOf("eventDispatcher") !== -1) {
                this.props.eventDispatcher = this;
            }

            for (let name of customElementProps) {
                Object.defineProperty(this, name, {
                    set(newValue) {
                        this.props[name] = newValue;
                        if (this.componentConnected && this.scheduleRender === false) {
                            this.scheduleRender = true;
                            setTimeout(() => {
                                this.scheduleRender = false;
                                renderReactComponent(this.reactComponent, this.textToAppend, this.mountPoint, this.props);
                            }, 0);
                        }
                    }
                });
            }
        }

        setAttribute(name, value) {
            switch (name) {
                default:
                    super.setAttribute(name, value);
            }
        }

        connectedCallback() {
            this.componentConnected = true;
            this.textToAppend = this.getAttribute('innerContent') || '';
            renderReactComponent(this.reactComponent, this.textToAppend, this.mountPoint, this.props);
            retargetEvents(this.mountPoint);
        }

        disconnectedCallback() {
            this.componentConnected = false;
            ReactDOM.unmountComponentAtNode(this.mountPoint);
        }
    };

    customElements.define(`ll-${name}`, Clazz);
};

export default renderReactApiRegistrationForm;

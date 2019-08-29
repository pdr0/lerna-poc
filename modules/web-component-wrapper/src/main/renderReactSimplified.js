// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import addWebComponentConfigToElement from './addWebComponentConfigToElement';

export const renderReactComponent = (Component: any, target: any, props: any) => {
    ReactDOM.render((
        <Component {...props} />
    ), target);
};

/**
 * This is a simplified copy of renderReact.js - It can be removed, once we use SkateJS for "wrapping" the
 * BankIdRegistrationForm into a WebComponent.
 *
 * @param name The name of the WebComponent tag
 * @param componentFactory an parameterless function that returns the React component to wrap
 */
const renderReactSimplified = (name: string, componentFactory: any) => {
    const Clazz = class extends HTMLElement {
        mountPoint;
        props = {};
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
                const {...propTypes} = componentPropTypes;
                customElementProps = Object.keys(propTypes);
            }

            if (customElementProps.indexOf("eventDispatcher") !== -1) {
                this.props.eventDispatcher = this;
            }
        }

        connectedCallback() {
            renderReactComponent(this.reactComponent, this.mountPoint, this.props);
            retargetEvents(this.mountPoint);
        }

        disconnectedCallback() {
            ReactDOM.unmountComponentAtNode(this.mountPoint);
        }
    };

    customElements.define(`ll-${name}`, Clazz);
};

export default renderReactSimplified;
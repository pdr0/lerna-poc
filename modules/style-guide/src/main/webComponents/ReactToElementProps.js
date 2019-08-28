// @flow

import { adaptValue } from "./ReactEventHandlerAdapter";

function setOrUpdateChangedPropsElement(element, reactProps, previousReactProps) {
    Object.keys(reactProps)
        .filter(propName => propName !== "children" && reactProps[propName] !== previousReactProps[propName])
        .forEach(propName => (element[propName] = adaptValue(propName, reactProps[propName])));
}

function removeDeletedPropsOnElement(element, reactProps, previousReactProps) {
    Object.keys(previousReactProps)
        .filter(propName => !reactProps[propName])
        .forEach(propName => (element[propName] = undefined));
}

export function setReactPropsOnElement(element: Object, reactProps: {}): void {
    setOrUpdateChangedPropsElement(element, reactProps, {});
}

export function updateReactPropsOnElement(element: Object, reactProps: {}, previousReactProps: {}): void {
    setOrUpdateChangedPropsElement(element, reactProps, previousReactProps);
    removeDeletedPropsOnElement(element, reactProps, previousReactProps);
}

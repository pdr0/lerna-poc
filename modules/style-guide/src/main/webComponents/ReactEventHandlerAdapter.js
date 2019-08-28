// @flow

export function adaptValue<T>(propName: string, propValue: T): T {
    if (propName.startsWith("on") && typeof propValue === "function") {
        // $FlowFixMe
        return function() {
            if (arguments.length && arguments[0] && arguments[0].stopImmediatePropagation) {
                arguments[0].stopImmediatePropagation();
            }
            // $FlowFixMe
            propValue.apply(this, arguments);
        };
    }
    return propValue;
}

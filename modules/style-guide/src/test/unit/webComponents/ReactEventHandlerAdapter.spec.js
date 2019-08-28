// @flow

import {adaptValue} from "../../../main/webComponents/ReactEventHandlerAdapter";

describe("React Event Handler Adapter", () => {

    it("should return non event values as the are", () => {
        const adapted = adaptValue("myProp", "myValue");
        expect(adapted).toEqual("myValue");
    });

    describe("event values", () => {

        let handlerCalled;
        let handlerArgument;
        let eventPropagationStopped;
        let adapted;

        const event = new Event("CustomEvent");
        const handler = (event) => {
            handlerCalled = true;
            handlerArgument = event;
        };

        beforeEach(() => {
            handlerCalled = false;
            handlerArgument = undefined;
            // $FlowFixMe
            event.stopImmediatePropagation = () => {
                eventPropagationStopped = true;
            };
            eventPropagationStopped = false;
        });

        it("should adapt event handler values", () => {
            // when
            adapted = adaptValue("onSomeEvent", handler);

            // then
            expect(adapted).toBeDefined();
            expect(adapted).not.toBe(handler);
        });

        it("event handlers are called by there adapter", () => {
            // when
            adaptValue("onSomeEvent", handler)(event);

            // then
            expect(handlerCalled).toBeTruthy();
            expect(handlerArgument).toEqual(event);
            expect(eventPropagationStopped).toBeTruthy();
        });
    });
});

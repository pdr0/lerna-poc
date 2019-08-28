// @flow

import {setReactPropsOnElement, updateReactPropsOnElement} from "../../../main/webComponents/ReactToElementProps";
import {adaptValue} from "../../../main/webComponents/ReactEventHandlerAdapter";

describe("React to element properties", () => {

    describe("setReactPropsOnElement", () => {

        it("should set non event props to the element", () => {
            // given
            const reactProps = {
                foo: "fooValue",
                bar: "barValue"
            };
            const element = {};

            // when
            setReactPropsOnElement(element, reactProps);

            // then
            expect(element.foo).toEqual("fooValue");
            expect(element.bar).toEqual("barValue");
        });

        it("should not set the children prop to the element", () => {
            // given
            const reactProps = {
                children: {}
            };
            const element = {};

            // when
            setReactPropsOnElement(element, reactProps);

            // then
            expect(element.children).toBeUndefined();
        });

        it("should set adapted event handler props to the element", () => {
            // given
            const reactProps = {
                onSomeEvent: () => {
                }
            };
            const element = {};

            // when
            setReactPropsOnElement(element, reactProps);

            // then
            expect(element.onSomeEvent).toBeDefined();
            expect(element.onSomeEvent).not.toBe(reactProps.onSomeEvent);
        });
    });

    describe("updateReactPropsOnElement", () => {

        it('should update, drop and keep the correct properties of the element', function () {
            // given
            const handlerToBeKept = () => {
            };
            const handlerToBeChanged = () => {
            };
            const previousReactProps = {
                toBeDropped: "toBeDroppedValue",
                toBeKept: "toBeKeptValue",
                toBeChanged: "toBeChangedOldValue",
                children: {},
                onSomeEvent: handlerToBeKept,
                onEventToBeChanged: handlerToBeChanged
            };
            const reactProps = {
                toBeKept: "toBeKeptValue",
                toBeChanged: "toBeChangedValue",
                toBeAdded: "toBeAddedValue",
                children: {},
                onSomeEvent: handlerToBeKept,
                onEventToBeChanged: () => {
                }
            };
            const adaptedOnSomeEventHandler = adaptValue("onSomeEvent", handlerToBeKept);
            const adaptedToBeChangedEventHandler = adaptValue("onEventToBeChanged", handlerToBeChanged);
            const element: any = {
                toBeDropped: "toBeDroppedValue",
                toBeKept: "toBeKeptValue",
                toBeChanged: "toBeChangedValue",
                onSomeEvent: adaptedOnSomeEventHandler,
                onEventToBeChanged: adaptedToBeChangedEventHandler
            };

            // when
            updateReactPropsOnElement(element, reactProps, previousReactProps);

            // then
            expect(element.toBeDropped).toBeUndefined();
            expect(element.toBeKept).toEqual("toBeKeptValue");
            expect(element.toBeChanged).toEqual("toBeChangedValue");
            expect(element.toBeAdded).toEqual("toBeAddedValue");
            expect(element.children).toBeUndefined();
            expect(element.onSomeEvent).toBe(adaptedOnSomeEventHandler);
            expect(element.onEventToBeChanged).toBeDefined();
            expect(element.onEventToBeChanged).not.toBe();
        });
    });
});

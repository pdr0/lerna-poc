// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import {Confirmation} from "../../../../main/react";

describe('Confirmation', () => {
    const createWrapper = (givenProps: {} = {}) => {
        const noop = () => {
        };
        const props = {
            onConfirm: noop,
            onAbort: noop,
            confirmText: 'Confirm',
            abortText: 'Abort',
            messageText: 'Message text',
            ...givenProps
        };
        return shallow(<Confirmation {...props}/>);
    };

    it('should display given message text', () => {
        const messageText = 'My cool confirmation message text';
        const wrapper = createWrapper({messageText});
        expect(wrapper.find('.t-message-text').text()).toEqual(messageText);
    });

    describe('confirm', () => {
        it('should call onConfirm when the confirm button is clicked', () => {
            // using a mock here will enable the tests to run fast
            // we can also pass a "real" function calling done() in it.
            // but if done is not called immediately, the test will
            // wait 5 secs in order to fail
            const onConfirm = jest.fn();
            const wrapper = createWrapper({onConfirm});

            wrapper.find('.t-confirm-button').simulate('click');

            expect(onConfirm).toHaveBeenCalled();
        });

        it('should render the given confirm text', () => {
            const wrapper = createWrapper({confirmText: 'My confirm text'});
            expect(wrapper.find('.t-confirm-button').dive().text()).toEqual('My confirm text');
        });
    });

    describe('abort', () => {
        it('should call onAbort when the abort button is clicked', () => {
            const onAbort = jest.fn();
            const wrapper = createWrapper({onAbort});

            wrapper.find('.t-abort-button').simulate('click');

            expect(onAbort).toHaveBeenCalled();
        });

        it('should render the given abort text', () => {
            const wrapper = createWrapper({abortText: 'My abort text'});
            expect(wrapper.find('.t-abort-button').dive().text()).toEqual('My abort text');
        });
    });
});
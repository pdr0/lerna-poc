// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import {Message} from "../../../../main/react";

describe('Message', () => {
    const createWrapper = (children: React.Node = 'This is my desired message', props?: {} = {}) => {
        const defaultProps = {};

        return shallow(
            <Message {...defaultProps}
                     {...props}>
                {children}
            </Message>
        );
    };

    it('should apply .message class', () => {
        const wrapper = createWrapper();
        expect(wrapper.is('.message')).toEqual(true);
    });

    it('should apply .message-success class', () => {
        const wrapper = createWrapper('message', {success: true});
        expect(wrapper.is('.message-success')).toEqual(true);
    });

    it('should display given text', () => {
        const wrapper = createWrapper('This is my desired message');
        expect(wrapper.find('.t-message-text').text()).toEqual('This is my desired message');
    });
});
// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import {GrowlMessage} from "../../../../main/react";

describe('GrowlMessage', () => {
    const createWrapper = (children: React.Node = 'This is my desired message', props?: {} = {}) => {
        const defaultProps = {
            onClose: jest.fn(),
            displayed: true
        };

        return shallow(
            <GrowlMessage {...defaultProps}
                          {...props}>
                {children}
            </GrowlMessage>
        );
    };

    it('should apply .growlMessage class', () => {
        const wrapper = createWrapper();
        expect(wrapper.is('.t-growlMessage')).toEqual(true);
    });

    it('should display given text', () => {
        const wrapper = createWrapper('This is my desired message');
        expect(wrapper.find('.t-growlMessage-content').text()).toEqual('This is my desired message');
    });
});
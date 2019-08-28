// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import {Notification} from "../../../../main/react";

describe('Notification', () => {
    const createWrapper = (children: React.Node = 'This is my desired message', props?: {} = {}) => {
        const defaultProps = {};

        return shallow(
            <Notification {...defaultProps}
                          {...props}>
                {children}
            </Notification>
        );
    };

    it('Creates an default notification', () => {
        const wrapper = createWrapper();
        expect(wrapper.is('.notification')).toEqual(true);
        expect(wrapper.find('.notification-content').text()).toEqual('This is my desired message');
    });

    it('Creates an default notification with type succesful', () => {
        const wrapper = createWrapper('message', {type: 'success'});
        expect(wrapper.find("Icon").prop("name")).toEqual("check-circle-2");
    });

    it('Creates an default notification with type info', () => {
        const wrapper = createWrapper('message', {type: 'info'});
        expect(wrapper.find("Icon").prop("name")).toEqual("information");
    });

    it('Creates an default notification with type error', () => {
        const wrapper = createWrapper('message', {type: 'error'});
        expect(wrapper.find("Icon").prop("name")).toEqual("alert-1");
    });

    it('Creates an default notification with type warning', () => {
        const wrapper = createWrapper('message', {type: 'warning'});
        expect(wrapper.find("Icon").prop("name")).toEqual("alert-2");
    });


});
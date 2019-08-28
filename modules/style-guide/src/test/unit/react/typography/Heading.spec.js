// @flow

import * as React from 'react';
import {mount} from 'enzyme';
import {Heading} from "../../../../main/react";

describe('Heading', () => {
    it('should render a div tag', () => {
        const wrapper = mount(<Heading size={'h1'}/>).render();
        expect(wrapper.is('div')).toBeTruthy();
    });

    const headingClasses = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'];
    for (const headingClass of headingClasses) {
        it(`should apply the heading styling classes for the size ${headingClass}`, () => {
            const wrapper = mount(<Heading size={headingClass}/>).render();
            expect(wrapper.is(`.${headingClass}`)).toBeTruthy();
        });
    }

    it('should append given custom classes to the rendered node', () => {
        const wrapper = mount(<Heading size={'h1'} className={'custom-class'}/>).render();
        expect(wrapper.is('.custom-class')).toBeTruthy();
    });

    it('should render the passed text inside the heading', () => {
        const wrapper = mount(<Heading size={'h1'}>Test</Heading>).render();
        expect(wrapper.text()).toBe('Test');
    });
});

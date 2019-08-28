// @flow

import * as React from 'react';
import {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Link} from "../../../../main/react";

describe('Link', () => {
    it("should render a 'span' if there is no href given", () => {
        const wrapper = shallow(<Link>Link</Link>);
        expect(wrapper.find('span.link')).toHaveLength(1);
    });

    it("should not contain a href if there is no href given", () => {
        const wrapper = shallow(<Link>Link</Link>);
        expect(wrapper.find('.link').prop('href')).toBeUndefined();
    });

    it("should render an 'a' if there is a href given", () => {
        const wrapper = shallow(<Link href={'#'}>Link</Link>);
        expect(wrapper.find('a.link')).toHaveLength(1);
    });

    it("should link to the given href if there is a href given", () => {
        const wrapper = shallow(<Link href={'#'}>Link</Link>);
        expect(wrapper.find('a').prop('href')).toBe('#');
    });

    it("should be a small link if the small property is true", () => {
        const wrapper = shallow(<Link small>Link</Link>);
        expect(wrapper.find('span.link.small')).toHaveLength(1);
    });

    it("should be able to pass additional properties like onClickHandler", () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Link onClickHandler={onClick}>Link</Link>);
        wrapper.find('.link').simulate('click');
        expect(onClick.mock.calls).toHaveLength(1);
    });

    it("should be able to pass additional css classes", () => {
        const wrapper = shallow(<Link className='test'>Link</Link>);
        expect(wrapper.find('span.link')).toHaveLength(1);
    });

    it("should not contain a href if a href is defined but the link is disabled", () => {
        const wrapper = shallow(<Link disabled href={'#'}>Link</Link>);
        expect(wrapper.find('.link').prop('href')).toBeUndefined();
    });

    it("should not execute onClickHandler if an onClickHandler is defined but the link is disabled", () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Link disabled onClickHandler={onClick}>Link</Link>);
        wrapper.find('.link').simulate('click');
        expect(onClick.mock.calls).toHaveLength(0);
    });

    it("should be a monochrome link if the monochrome property is true", () => {
        const wrapper = shallow(<Link monochrome>Link</Link>);
        expect(wrapper.find('span.link.monochrome')).toHaveLength(1);
    });

    it("should not be a monochrome link if the monochrome property is not set", () => {
        const wrapper = shallow(<Link>Link</Link>);
        expect(wrapper.is('span.link.monochrome')).toBeFalsy();
    });

    it("should contain a style tag for component specific css", () => {
        const wrapper = mount(<Link>Link</Link>);
        expect(wrapper.find('style')).toHaveLength(1);
    });
});
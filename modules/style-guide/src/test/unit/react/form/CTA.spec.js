// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import {CTA} from "../../../../main/react";

describe('CTA', () => {
  it("should render a button", () => {
    const wrapper = shallow(<CTA>CTA</CTA>);
    expect(wrapper.is('button')).toBeTruthy();
  });

  it("should contain the given text", () => {
    const wrapper = shallow(<CTA>CTA</CTA>);
    expect(wrapper.text()).toBe('CTA');
  });

  it("should always apply the cta small padding style for small version", () => {
    const wrapper = shallow(<CTA smallPadding={true}>CTA</CTA>);
    expect(wrapper.is('.cta-padding-small')).toBeTruthy();
  });

  it("should always apply the cta styling class by default", () => {
    const wrapper = shallow(<CTA>CTA</CTA>);
    expect(wrapper.is('.cta')).toBeTruthy();
  });

  it("should apply the primary cta styling classes by default", () => {
    const wrapper = shallow(<CTA>CTA</CTA>);
    expect(wrapper.is('.cta-primary')).toBeTruthy();
  });

  it("should have the ability to add additional styling classes", () => {
    const wrapper = shallow(<CTA className={'test'}>CTA</CTA>);
    expect(wrapper.is('.test')).toBeTruthy();
  });

  it("should be able to set the disabled status", () => {
    const wrapper = shallow(<CTA disabled>CTA</CTA>);
    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it("should be enabled by default", () => {
    const wrapper = shallow(<CTA>CTA</CTA>);
    expect(wrapper.prop('disabled')).toBeFalsy();
  });

  it("should be able to apply additional properties like onClick", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<CTA onClick={onClick}>CTA</CTA>);
    wrapper.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });
});
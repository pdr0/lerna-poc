// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import Input from '../../../../main/react/form/Input';

describe('Input', () => {
  it("should render without error", () => {
    const wrapper = shallow(<Input type="text"/>);
    expect(wrapper.is('input')).toBeTruthy();
  });

  it('should apply given type', () => {
    let wrapper = shallow(<Input type="password"/>);
    expect(wrapper.is('input[type="password"]')).toBeTruthy();
    wrapper = shallow(<Input type="email"/>);
    expect(wrapper.is('input[type="email"]')).toBeTruthy();
  });

  it('should apply given value', () => {
    const wrapper = shallow(<Input type="password" value="test"/>);
    expect(wrapper.is('input[value="test"]')).toBeTruthy();
  });

  it('should render input with .input class', () => {
    const wrapper = shallow(<Input type="text"/>);
    expect(wrapper.is('.input')).toBeTruthy();
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Input className="additional" type="text"/>);
    expect(wrapper.is('.additional')).toBeTruthy();
  });

  it('should not render .is-valid or .is-invalid if valid prop not given', () => {
    const wrapper = shallow(<Input type="text"/>);
    expect(wrapper.is('.is-valid')).toBeFalsy();
    expect(wrapper.is('.is-invalid')).toBeFalsy();
  });

  it('should render .is-valid if valid is true', () => {
    const wrapper = shallow(<Input type="text" valid={true}/>);
    expect(wrapper.is('.is-valid')).toBeTruthy();
  });

  it('should render .is-invalid if valid is false', () => {
    const wrapper = shallow(<Input type="text" valid={false}/>);
    expect(wrapper.is('.is-invalid')).toBeTruthy();
  });

  it('should attach additional props to input', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Input type="text" onClick={onClick}/>);
    wrapper.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });

  it('should not apply .is-filled class if input value is empty', () => {
    const wrapper = shallow(<Input type="text"/>);
    expect(wrapper.is('.is-filled')).toBeFalsy();
  });

  it('should apply .is-filled class if input value is filled', () => {
    const wrapper = shallow(<Input type="text" value="test"/>);
    expect(wrapper.is('.is-filled')).toBeTruthy();
  });

  it('should apply disabled property if true', () => {
    const wrapper = shallow(<Input type="text" disabled={true}/>);
    expect(wrapper.is('input[disabled=true]')).toBeTruthy();
  });

  it('should not apply disabled property if false', () => {
    const wrapper = shallow(<Input type="text" disabled={false}/>);
    expect(wrapper.is('input[disabled=false]')).toBeTruthy();
  });
});
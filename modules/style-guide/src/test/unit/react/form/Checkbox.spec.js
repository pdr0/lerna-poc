// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import CheckboxInput from '../../../../main/react/form/CheckboxInput';
import {Checkbox} from "../../../../main/react";

describe('Checkbox', () => {

  const emptyFunction = () => {
  };

  it("should render without error", () => {
    const wrapper = shallow(<Checkbox onClick={emptyFunction}/>);
    expect(wrapper.is('div.checkbox')).toBeTruthy();
  });

  it('should pass the disabled state to the internal checkbox atom', () => {
    const wrapper = shallow(<Checkbox onClick={emptyFunction} disabled/>);
    const internalCheckBox = wrapper.find(CheckboxInput);
    expect(internalCheckBox.prop('disabled')).toEqual(true);

    const wrapper2 = shallow(<Checkbox onClick={emptyFunction}/>);
    const internalCheckBox2 = wrapper2.find(CheckboxInput);
    expect(internalCheckBox2.prop('disabled')).toEqual(false);
  });

  it('should pass the checked state to the internal checkbox atom', () => {
    const wrapper = shallow(<Checkbox onClick={emptyFunction} checked/>);
    const internalCheckBox = wrapper.find(CheckboxInput);
    expect(internalCheckBox.prop('checked')).toEqual(true);

    const wrapper2 = shallow(<Checkbox onClick={emptyFunction}/>);
    const internalCheckBox2 = wrapper2.find(CheckboxInput);
    expect(internalCheckBox2.prop('checked')).toEqual(false);
  });

  it('should render the children components in checkbox-label wrapper', () => {
    const wrapper = shallow(<Checkbox onClick={emptyFunction}><span id='test-label-comp'/></Checkbox>);
    const labelWrapper = wrapper.find('#test-label-comp').parent();
    expect(labelWrapper.prop("className")).toEqual("checkbox-label");
  });

  it('should add disabled class to the children components label wrapper if the checkbox component is disabled', () => {
    const wrapper = shallow(<Checkbox onClick={emptyFunction} disabled><span id='test-label-comp'/></Checkbox>);
    const labelWrapper = wrapper.find('#test-label-comp').parent();
    expect(labelWrapper.prop('className')).toEqual('checkbox-label checkbox-label-disabled');
  });

  it('should render the children component´s text', () => {
    const wrapper = shallow(
      <Checkbox onClick={emptyFunction}>
        foo
      </Checkbox>
    );
    const labelWrapper = wrapper.find('.checkbox-label');
    expect(labelWrapper.text()).toEqual('foo');
  });

  it('should render a CheckboxInput', () => {
    const wrapper = shallow(<Checkbox onClick={emptyFunction}/>);
    const checkboxInput = wrapper.find('.labeled-checkbox');
    expect(checkboxInput.type()).toEqual(CheckboxInput);
  });

  it('should handle the given onClick when the internal checkbox is changed', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Checkbox onClick={onClick}/>);
    const checkboxInput = wrapper.find(CheckboxInput);
    checkboxInput.simulate('change');
    expect(onClick.mock.calls).toHaveLength(1);
  });

  it('should render a CheckboxInput with the default className', () => {
    const wrapper = shallow(<Checkbox onClick={emptyFunction}/>);
    const checkboxInput = wrapper.find(CheckboxInput);
    expect(checkboxInput.prop('className')).toEqual('labeled-checkbox');
  });

  it('should add a className to a CheckboxInput, while keeping the existing className', () => {
    const wrapper = shallow(<Checkbox className='hello-world'  onClick={emptyFunction}/>);
    const checkboxInput = wrapper.find(CheckboxInput);
    expect(checkboxInput.prop('className')).toEqual('labeled-checkbox hello-world');
  });
});
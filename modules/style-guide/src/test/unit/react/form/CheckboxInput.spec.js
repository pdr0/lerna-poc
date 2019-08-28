// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import CheckboxInput from '../../../../main/react/form/CheckboxInput';

describe('CheckboxInput', () => {
  it('should render an input element', () => {
    const wrapper = shallow(<CheckboxInput />);
    const internalCheckbox = wrapper.find('input');
    expect(internalCheckbox.type()).toEqual('input');
  });

  it('should render an input element with the input styling class', () => {
    const wrapper = shallow(<CheckboxInput/>);
    const internalCheckbox = wrapper.find('input');
    expect(internalCheckbox.prop('className')).toEqual('checkbox-input');
  });

  it('should render an input element with type checkbox', () => {
    const wrapper = shallow(<CheckboxInput />);
    const internalCheckbox = wrapper.find('input');
    expect(internalCheckbox.prop('type')).toEqual('checkbox');
  });

  it('should be checked if the checked property is given', () => {
    const wrapper = shallow(<CheckboxInput  checked/>);
    const internalCheckbox = wrapper.find('input');

    expect(internalCheckbox.prop('checked')).toEqual(true);
  });

  it('should be unchecked by default', () => {
    const wrapper = shallow(<CheckboxInput />);
    const internalCheckbox = wrapper.find('input');

    expect(internalCheckbox.prop('checked')).toEqual(false);
  });

  it('should be enabled by default', () => {
    const wrapper = shallow(<CheckboxInput />);
    const internalCheckbox = wrapper.find('input');

    expect(internalCheckbox.prop('disabled')).toEqual(false);
  });

  it('should be disabled if the disabled property is set', () => {
    const wrapper = shallow(<CheckboxInput disabled/>);
    const internalCheckbox = wrapper.find('input');

    expect(internalCheckbox.prop('disabled')).toEqual(true);
  });

  it('should add additional styling classes', () => {
    const additionalClass = 'additional';
    const wrapper = shallow(<CheckboxInput className={additionalClass}/>);
    expect(wrapper.prop('className')).toEqual(`checkbox-container ${additionalClass}`);
  });
});
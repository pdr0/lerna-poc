// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import type {Option} from "../../../../main/react/form/Dropdown";
import {Dropdown} from "../../../../main/react";

const options : Array<Option> = [
  { value: 'red', label: 'RED'},
  { value: 'green', label: 'GREEN'},
  { value: 'blue', label: 'BLUE', disabled: true},
];

describe('<Dropdown/> with options', () => {
  const wrapper = shallow(<Dropdown name="color" options={options} />);

  it("should render a 'div' with class 'Dropdown'", () => {
    expect(wrapper.is('div.dropdown')).toBeTruthy();
  });

  it("should render a 'select' with given name", () => {
    expect(wrapper.find('select').prop('name')).toBe('color');
  });

  it("should contain given options", () => {
    expect(wrapper.find('option')).toHaveLength(options.length);

    options.forEach ( option =>
      expect(wrapper
        .find('option')
        .contains(<option value={option.value} disabled={option.disabled}>{option.label}</option>))
        .toBeTruthy()
    );
  });
});

describe('<Dropdown/> with options and preselected value', () => {
  const wrapper = shallow(<Dropdown name="color" options={options} value="green"/>);

  it("should set defined value as selected option", () => {
    expect(wrapper.find('select').prop('value')).toBe('green');
  });

});

describe('<Dropdown/> disabled', () => {

  it("should set disabled=false by default", () => {
    const wrapper = shallow(<Dropdown name="color" options={options}/>);
    expect(wrapper.find('select').prop('disabled')).toBeFalsy();
  });

  it("should be disabled for disabled=true", () => {
    const wrapper = shallow(<Dropdown name="color" options={options} disabled={true}/>);
    expect(wrapper.find('select').prop('disabled')).toBeTruthy();
  });

  it("should contain is-disabled class for disabled=true", () => {
    const wrapper = shallow(<Dropdown name="color" options={options} disabled={true}/>);
    expect(wrapper.hasClass("is-disabled")).toBeTruthy();
  });
});

describe('<Dropdown/> empty option', () => {
  it("should contain option with given empty option", () => {
    const emptyLabel = "Please select...";
    const wrapper = shallow(<Dropdown name="color" options={[]} emptyOption={{
      label: emptyLabel,
      value: '',
      disabled: true
    }}/>);

    expect(wrapper.find('option')).toHaveLength(1);
    expect(wrapper.find('option').first().prop('value')).toBe('');
    expect(wrapper.find('select').prop('value')).toBe('');
    expect(wrapper
      .find('option')
      .contains(<option className="empty-option" value='' disabled>{emptyLabel}</option>))
      .toBeTruthy()
  });

  it("should contain default empty option when emptyLabel undefined", () => {
    const wrapper = shallow(<Dropdown name="color" options={[]}/>);
    expect(wrapper.find('option')).toHaveLength(0);
  });

  it("should return undefined value when no empty option is given", () => {
    const wrapper = shallow(<Dropdown name="color" options={[]}/>);
    expect(wrapper.find('select').prop('value')).toBeUndefined();
  });
});

describe('<Dropdown/> isValid', () => {
  it("should have class is-invalid for truthy isValid", () => {
    const wrapper = shallow(<Dropdown name="color" options={options} isValid={true}/>);
    expect(wrapper.hasClass('is-valid')).toBeTruthy();
  });

  it("should have class is-invalid for truthy isValid", () => {
    const wrapper = shallow(<Dropdown name="color" options={options} isValid={false}/>);
    expect(wrapper.hasClass('is-invalid')).toBeTruthy();
  });

  it("should not have class is-valid or is-invalid undefined isValid", () => {
    const wrapper = shallow(<Dropdown name="color" options={options}/>);
    expect(wrapper.hasClass('is-valid')).toBeFalsy();
    expect(wrapper.hasClass('is-invalid')).toBeFalsy();
  });
});

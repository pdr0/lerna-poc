// @flow

import * as React from 'react';
import {shallow, mount} from 'enzyme';
import Input from '../../../../main/react/form/Input';
import TextField from '../../../../main/react/form/TextField';
import * as Icon from '../../../../main/constants/Icons';

describe('TextField', () => {
  it("should render FormEntry", () => {
    const wrapper = shallow(
      <TextField id="input"
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false}/>
    );
    expect(wrapper.is('FormEntry')).toBeTruthy();
  });

  it("should render Input", () => {
    const wrapper = shallow(
      <TextField id="input"
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false}/>
    );
    expect(wrapper.find('Input')).toBeTruthy();
  });

  it("should pass icon to FormEntry", () => {
    const icon = Icon.User2;
    const wrapper = shallow(
      <TextField id="input"
                 icon={icon}
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false}/>
    );
    expect(wrapper.find('FormEntry').prop('icon')).toEqual(icon);
  });

  it("should pass id as controlId to FormEntry", () => {
    const id = 'input';
    const wrapper = shallow(
      <TextField id={id}
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false}/>
    );
    expect(wrapper.find('FormEntry').prop('controlId')).toEqual(id);
  });

  it("should pass id to Input", () => {
    const id = 'input';
    const wrapper = shallow(
      <TextField id={id}
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false}/>
    );
    expect(wrapper.find('Input').prop('id')).toEqual(id);
  });

  it("should pass labelText to FormEntry", () => {
    const labelText = 'My cool label';
    const wrapper = shallow(
      <TextField id="input"
                 labelText={labelText}
                 helpText="Pretty cool."
                 touched={false}/>
    );
    expect(wrapper.find('FormEntry').prop('labelText')).toEqual(labelText);
  });

  it("should pass labelText as placeholder to Input", () => {
    const labelText = 'My cool label';
    const wrapper = shallow(
      <TextField id="input"
                 labelText={labelText}
                 helpText="Pretty cool."
                 touched={false}/>
    );
    expect(wrapper.find('Input').prop('placeholder')).toEqual(labelText);
  });

  it("should pass helpText to FormEntry", () => {
    const helpText = 'My cool help text';
    const wrapper = shallow(
      <TextField id="input"
                 labelText="label"
                 helpText={helpText}
                 touched={false}/>
    );
    expect(wrapper.find('FormEntry').prop('helpText')).toEqual(helpText);
  });

  it("should pass type to Input", () => {
    const type = 'password';
    const wrapper = shallow(
      <TextField id="input"
                 labelText="label"
                 helpText="help"
                 type={type}
                 touched={false}/>
    );
    expect(wrapper.find('Input').prop('type')).toEqual(type);
  });

  it("should pass value to Input", () => {
    const value = 'val';
    const wrapper = shallow(
      <TextField id="input"
                 labelText="label"
                 helpText="help"
                 value={value}
                 touched={false}/>
    );
    expect(wrapper.find('Input').prop('value')).toEqual(value);
  });

  it("should pass valid to FormEntry", () => {
    const valid = true;
    const wrapper = shallow(
      <TextField id="input"
                 labelText="label"
                 helpText="help"
                 valid={valid}
                 touched={false}/>
    );
    expect(wrapper.find('FormEntry').prop('valid')).toEqual(valid);
  });

  it("should pass all additional props to Input", () => {
    const className = 'coolClass';
    const wrapper = shallow(
      <TextField id="input"
                 labelText="label"
                 helpText="help"
                 className={className}
                 touched={false}/>
    );
    expect(wrapper.find('Input').prop('className')).toEqual(className);
  });

  it('should pass text-field class as containerClassName to FormEntry', () => {
    const wrapper = shallow(
      <TextField id="input"
                 labelText="label"
                 helpText="help"
                 touched={false}
      />
    );
    expect(wrapper.find('FormEntry').prop('className')).toEqual('text-field');
  });

  it('should allow passing containerClassName', () => {
    const className = 'coolClass';
    const wrapper = shallow(
      <TextField id="input"
                 labelText="label"
                 helpText="help"
                 containerClassName={className}
                 touched={false}
      />
    );
    expect(wrapper.find('FormEntry').prop('className')).toEqual(`text-field ${className}`);
  });

  it('should display the label by click in', () => {
      const wrapper = mount(
          <TextField id="input"
                     labelText="Test"
                     helpText="Pretty cool."
                     touched={true}
          />
      );
      expect(wrapper.find('label').prop('className')).toEqual('on');
  });

  it('should hide the label by onblur when the input is empty', () => {
      const wrapper = mount(
          <TextField id="input"
                     labelText="Test"
                     helpText="Pretty cool."
                     touched={false}
          />
      );
      expect(wrapper.find('label').prop('className')).toEqual('');
  });

  it('should NOT hide the label when the input is NOT empty', () => {
        const wrapper = mount(
            <TextField id="input"
                       labelText="Test"
                       helpText="Pretty cool."
                       value="Some value for the Input :)"
                       touched={false}
            />
        );
        expect(wrapper.find('label').prop('className')).toEqual('on');
    });
});
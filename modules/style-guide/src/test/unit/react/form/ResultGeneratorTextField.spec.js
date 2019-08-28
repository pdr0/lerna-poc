// @flow

import * as React from 'react';
import {shallow, mount} from 'enzyme';
import ResultGeneratorTextField from '../../../../main/react/form/ResultGeneratorTextField';
import * as Icon from '../../../../main/constants/Icons';

describe('ResultGeneratorTextField', () => {
  it("should render FormEntry", () => {
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.is('FormEntry')).toBeTruthy();
  });

  it("should render input", () => {
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('input')).toBeTruthy();
  });

  it("should pass icon to FormEntry", () => {
    const icon = Icon.User2;
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 icon={icon}
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('FormEntry').prop('icon')).toEqual(icon);
  });

  it("should pass id as controlId to FormEntry", () => {
    const id = 'input';
    const wrapper = shallow(
      <ResultGeneratorTextField id={id}
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('FormEntry').prop('controlId')).toEqual(id);
  });

  it("should pass id to input", () => {
    const id = 'input';
    const wrapper = shallow(
      <ResultGeneratorTextField id={id}
                 labelText="Test"
                 helpText="Pretty cool."
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('input').prop('id')).toEqual(id);
  });

  it("should pass labelText to FormEntry", () => {
    const labelText = 'My cool label';
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText={labelText}
                 helpText="Pretty cool."
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('FormEntry').prop('labelText')).toEqual(labelText);
  });

  it("should pass labelText as placeholder to input", () => {
    const labelText = 'My cool label';
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText={labelText}
                 helpText="Pretty cool."
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('input').prop('placeholder')).toEqual(labelText);
  });

  it("should pass helpText to FormEntry", () => {
    const helpText = 'My cool help text';
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText="label"
                 helpText={helpText}
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('FormEntry').prop('helpText')).toEqual(helpText);
  });

  it("should pass type to input", () => {
    const type = 'password';
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText="label"
                 helpText="help"
                 type={type}
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('input').prop('type')).toEqual(type);
  });

  it("should pass value to input", () => {
    const value = 'val';
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText="label"
                 helpText="help"
                 value={value}
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('input').prop('value')).toEqual(value);
  });

  it("should pass valid to FormEntry", () => {
    const valid = true;
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText="label"
                 helpText="help"
                 valid={valid}
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('FormEntry').prop('valid')).toEqual(valid);
  });

  it('should pass result-generator-text-field class as containerClassName to FormEntry', () => {
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText="label"
                 helpText="help"
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('FormEntry').prop('className')).toEqual('result-generator-text-field');
  });

  it('should allow passing containerClassName', () => {
    const className = 'coolClass';
    const wrapper = shallow(
      <ResultGeneratorTextField id="input"
                 labelText="label"
                 helpText="help"
                 containerClassName={className}
                 touched={false} forwardedRef={{}}/>
    );
    expect(wrapper.find('FormEntry').prop('className')).toEqual(`result-generator-text-field ${className}`);
  });

  it('should display the label by click in', () => {
      const wrapper = mount(
          <ResultGeneratorTextField id="input"
                     labelText="Test"
                     helpText="Pretty cool."
                     touched={true} forwardedRef={{}}/>
      );
      expect(wrapper.find('label').prop('className')).toEqual('on');
  });

  it('should hide the label by onblur when the input is empty', () => {
      const wrapper = mount(
          <ResultGeneratorTextField id="input"
                     labelText="Test"
                     helpText="Pretty cool."
                     value={""}
                     touched={false} forwardedRef={{}}/>
      );
      expect(wrapper.find('label').text()).toEqual('');
  });

  it('should NOT hide the label when the input is NOT empty', () => {
        const wrapper = mount(
            <ResultGeneratorTextField id="input"
                       labelText="Test"
                       helpText="Pretty cool."
                       value="Some value for the input :)"
                       touched={false} forwardedRef={{}}/>
        );
        expect(wrapper.find('label').prop('className')).toEqual('on');
    });
});
// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import Input from '../../../../main/react/form/Input';
import {FormEntry} from "../../../../main/react";
import * as Icon from '../../../../main/constants/Icons';
import * as PropTypes from 'prop-types';

describe('FormEntry', () => {
  it("should render without error", () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test">
        <Input type="text"/>
      </FormEntry>
    );
    expect(wrapper.is('div.form-entry')).toBeTruthy();
  });

  it('should apply given icon', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 icon={Icon.Add1}
                 controlId="test"
                 labelText="test">
        <Input type="text"/>
      </FormEntry>
    );

    expect(wrapper.find('.form-entry-icon').exists()).toBeTruthy();
  });

  it('should apply class .form-entry-with-icon when icon given', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 icon={Icon.Add1}
                 controlId="test"
                 labelText="test">
        <Input type="text"/>
      </FormEntry>
    );

    expect(wrapper.is('.form-entry-with-icon')).toBeTruthy();
  });

  it('should apply given controlId', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="controlId"
                 labelText="test">
        <Input type="text"/>
      </FormEntry>
    );

    expect(wrapper.find('.form-entry-content label').prop('htmlFor')).toEqual('controlId');
  });

  it('should render given labelText', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="My label text">
        <Input type="text"/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry-content label').text()).toEqual('My label text');
  });

  it('should render given helpText', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test"
                 helpText="My help text">
        <Input type="text"/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry-help-text').text()).toEqual('My help text');
  });

  it('should not apply valid classes if not supplied valid', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test"
                 helpText="My help text">
        <Input type="text"/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry-is-valid').exists()).toBeFalsy();
    expect(wrapper.find('.form-entry-is-invalid').exists()).toBeFalsy();
  });

  it('should apply class .form-entry-is-valid if valid is true', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test"
                 valid={true}>
        <Input type="text"/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry-is-valid').exists()).toBeTruthy();
  });

  it('should apply class .form-entry-is-invalid if valid is false', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test"
                 valid={false}>
        <Input type="text"/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry-is-invalid').exists()).toBeTruthy();
  });

  it('should render given child', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test">
        <Input type="text"/>
      </FormEntry>
    );
    expect(wrapper.find('Input').exists()).toBeTruthy();
  });

  it('should apply class .form-entry-is-disabled disabled supplied to passed child', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test">
        <Input type="text" disabled/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry-is-disabled').exists()).toBeTruthy();
  });

  it('should apply class .on for label if child disabled', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test">
        <Input type="text" disabled/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry-content label.on').exists()).toBeTruthy();
  });

  it('should apply class .on for label if child is input and has value', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test">
        <Input type="text" value="test"/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry-content label.on').exists()).toBeTruthy();
  });

  it('should allow being passed additional className', () => {
    const wrapper = shallow(
      <FormEntry type="text"
                 controlId="test"
                 labelText="test"
                 className="additional-class">
        <Input type="text"/>
      </FormEntry>
    );
    expect(wrapper.find('.form-entry.additional-class').exists()).toBeTruthy();
  });

  it('should not inject valid prop if it is not given in propTypes of child', () => {
    const TestComp = () => <div>test</div>;
    TestComp.propTypes = {};

    const valid = true;

    const wrapper = shallow(
      <FormEntry type="text"
                 valid={valid}
                 controlId="test"
                 labelText="test"
                 className="additional-class">
        <TestComp/>
      </FormEntry>
    );
    expect(wrapper.find('TestComp').prop('valid')).toEqual(undefined);
  });
});
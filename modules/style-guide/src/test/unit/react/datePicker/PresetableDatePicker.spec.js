// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {PresetableDatePicker} from "../../../../main/react";

describe('PresetableDatePicker', () => {
  it('is owning class .presetable-date-picker', () => {
    const wrapper = shallow(<PresetableDatePicker/>);
    expect(wrapper.is('.presetable-date-picker')).toBeTruthy();
  });

  it('is rendering DatePickerPresets', () => {
    const wrapper = shallow(<PresetableDatePicker/>);
    expect(wrapper.find('DatePickerPresets').exists()).toBeTruthy();
  });

  it('is rendering DatePicker', () => {
    const wrapper = shallow(<PresetableDatePicker/>);
    expect(wrapper.find('DatePicker').exists()).toBeTruthy();
  });

  it('is setting state properly when date is selected', () => {
    const yesterday = moment().subtract(1, 'day');
    const today = moment();
    const wrapper = shallow(<PresetableDatePicker/>);

    wrapper.instance().onDatesChange({startDate: yesterday, endDate: today});
    const state = wrapper.state();

    expect(state).toEqual({
      ...state,
      range: {
        startDate: yesterday,
        endDate: today
      }
    });
  });

  it('is calling onDatesChange when given on date change', () => {
    const yesterday = moment().subtract(1, 'day');
    const today = moment();
    const onDatesChange = jest.fn();
    const wrapper = shallow(<PresetableDatePicker onDatesChange={onDatesChange}/>);

    const args = {startDate: yesterday, endDate: today};
    wrapper.instance().onDatesChange(args);

    expect(onDatesChange.mock.calls).toHaveLength(1);
    expect(onDatesChange.mock.calls[0][0]).toEqual(args);
  });

  it('is setting focusedInput correctly when calling onFocusChange', () => {
    const wrapper = shallow(<PresetableDatePicker/>);
    const focusedInput = 'endDate';
    wrapper.instance().onFocusChange(focusedInput);
    const state = wrapper.state();
    expect(state).toEqual({
      ...state,
      focusedInput
    })
  });

  it('is setting focusedInput to startDate if null given when calling onFocusChange', () => {
    const wrapper = shallow(<PresetableDatePicker/>);
    wrapper.instance().onFocusChange();
    const state = wrapper.state();
    expect(state).toEqual({
      ...state,
      focusedInput: 'startDate'
    })
  });
});
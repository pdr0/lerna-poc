// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {DatePicker} from "../../../../main/react";

describe('DatePicker', () => {
  it('is rendering DayPickerRangeController', () => {
    const wrapper = shallow(<DatePicker/>);
    expect(wrapper.find('DayPickerRangeController').exists()).toBeTruthy();
  });

  it('is owning class .date-picker', () => {
    const wrapper = shallow(<DatePicker/>);
    expect(wrapper.is('.date-picker')).toBeTruthy();
  });

  it('is not showing shortcut panel', () => {
    const wrapper = shallow(<DatePicker/>);
    const controller = wrapper.find('DayPickerRangeController');
    const props = controller.props();
    expect(props).toEqual({
      ...props,
      hideKeyboardShortcutsPanel: true
    });
  });

  it('is allowing a given date that is inside the allowed range of 3 month in the past', () => {
    const wrapper = shallow(<DatePicker/>);
    const dateInsideTheRange = moment().subtract(3, 'month');
    expect(wrapper.instance().isOutsideRange(dateInsideTheRange)).toBeFalsy();
  });

  it('is not allowing to pick a date in the future', () => {
    const wrapper = shallow(<DatePicker/>);
    const dateInTheFuture = moment().add(1, 'day');
    expect(wrapper.instance().isOutsideRange(dateInTheFuture)).toBeTruthy()
  });

  it('is allowing to pick today', () => {
    const wrapper = shallow(<DatePicker/>);
    const today = moment();
    expect(wrapper.instance().isOutsideRange(today)).toBeFalsy();
  });

  it('is not allowing a given date that is outside the allowed range of 3 month in the past', () => {
    const wrapper = shallow(<DatePicker/>);
    const dateOutsideTheRange = moment().subtract(3, 'month').subtract(1, 'day');
    expect(wrapper.instance().isOutsideRange(dateOutsideTheRange)).toBeTruthy();
  });
});
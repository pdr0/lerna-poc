// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import DatePickerDayContent from '../../../../main/react/datePicker/DatePickerDayContent';

describe('DatePickerDayContent', () => {
  it('renders a container with class .date-picker-day-content', () => {
    const wrapper = shallow(<DatePickerDayContent day={moment()}/>);
    expect(wrapper.find('.date-picker-day-content')).toHaveLength(1);
  });

  it('renders the given day in desired format', () => {
    const date = moment();
    const wrapper = shallow(<DatePickerDayContent day={date}/>);
    expect(wrapper.find('.date-picker-day-content').text()).toEqual(date.format('D'));
  });
});
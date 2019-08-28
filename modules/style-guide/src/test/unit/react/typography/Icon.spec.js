// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import {Icon} from "../../../../main/react";
import * as icons from '../../../../main/constants/Icons';

describe('Icon', () => {
  it('should render an \'i\' tag', () => {
    const wrapper = shallow(<Icon name={icons.Add1}/>);
    expect(wrapper.is('i')).toBeTruthy();
  });

  it('should render a the provided icon', () => {
    const wrapper = shallow(<Icon name={icons.Add1}/>);
    expect(wrapper.is('.icon.icon-add-1')).toBeTruthy();
  });

  it('should be able to pass additional properties like onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Icon name={icons.Add1} onClick={onClick}/>);
    wrapper.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });

  it('should be able to pass additional css classes', () => {
    const wrapper = shallow(<Icon name={icons.Add1} className={'test'}/>);
    expect(wrapper.is('.icon.icon-add-1.test')).toBeTruthy();
  });
});
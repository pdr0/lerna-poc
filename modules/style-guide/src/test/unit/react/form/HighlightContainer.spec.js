// @flow

import * as React from 'react';
import {shallow} from 'enzyme';
import Checkbox from '../../../../main/react/form/Checkbox';
import HighlightContainer from '../../../../main/react/form/HighlightContainer';

describe('HighlightContainer', () => {
  it("should render without error", () => {
    const wrapper = shallow(
      <HighlightContainer>
        <Checkbox onClick={jest.fn()} />
      </HighlightContainer>
    );
    expect(wrapper.is('div.highlight-container')).toBeTruthy();
  });

  it('should apply class .highlight-container-is-invalid when not valid', () => {
    const wrapper = shallow(
        <HighlightContainer valid={false}>
            <Checkbox onClick={jest.fn()} />
        </HighlightContainer>
    );

    expect(wrapper.is('.highlight-container-is-invalid')).toBeTruthy();
  });

  it('should render given helpText', () => {
    const wrapper = shallow(
        <HighlightContainer helpText='My help text'>
            <Checkbox onClick={jest.fn()} />
        </HighlightContainer>
    );
    expect(wrapper.find('.highlight-container-help-text').text()).toEqual('My help text');
  });
});
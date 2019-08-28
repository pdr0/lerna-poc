// @flow

import * as React from 'react';
import {mount} from 'enzyme';
import {Style} from "../../../../main/react";

describe("Style", () => {
    it("should create a style-tag", () => {
        const testCss = ".foo{display:none;}";
        const component = mount(<Style css={testCss}/>);
        expect(component.find("style")).toHaveLength(1);
        component.unmount();
    });

    it("should create a style-tag with the given css", () => {
        const testCss = ".foo{display:none;}";
        const component = mount(<Style css={testCss}/>);
        expect(component.render().html()).toBe(testCss);
        component.unmount();
    });
});
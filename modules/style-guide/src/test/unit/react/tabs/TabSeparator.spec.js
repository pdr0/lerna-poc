// @flow
import * as React from "react";
import { shallow } from "enzyme";
import  TabSeparator  from "../../../../main/react/tabs/TabSeparator";

describe("Tab tests", () => {
    it("Should render", () => {
        const wrapper = shallow(<TabSeparator/>);
        expect(wrapper.find(".l-tabs-separator").length).toBe(1);
    });

    it("Should render with extra class", () => {
        const wrapper = shallow(<TabSeparator className={"test"}/>);
        expect(wrapper.find(".l-tabs-separator.test").length).toBe(1);
    });
});

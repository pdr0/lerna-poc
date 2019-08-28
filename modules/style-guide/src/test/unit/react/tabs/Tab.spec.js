// @flow
import * as React from "react";
import { shallow } from "enzyme";
import  Tab  from "../../../../main/react/tabs/Tab";
import TabItem from "./TabItem.spec";
const headings = ["Enter 10 Digit Number", "Jackpot result"];

describe("Tab tests", () => {
    it("Should render", () => {
        const wrapper = shallow(<Tab headings={headings}>
            <div>Tab panel content 1</div>
            <div>Tab panel content 2</div>
        </Tab>);
        expect(wrapper.find(".l-tabs").length).toBe(1);
        expect(wrapper.find(".l-tabs-list").length).toBe(1);
    });

    it("Should render with extra class", () => {
        const wrapper = shallow(<Tab className={"test"} headings={headings}> <div>Tab panel content 1</div><div>Tab panel content 2</div></Tab>);
        expect(wrapper.find(".l-tabs.test").length).toBe(1);
    });

    it("Should render children", () => {
        const wrapper = shallow(<Tab headings={headings}>
            <div>Tab panel content 1</div>
            <div>Tab panel content 2</div>
        </Tab>);
        expect(wrapper.find("TabItem").length).toBe(2);
    });

    it("Should click", () => {
        const wrapper = shallow(<Tab headings={headings}>
            <div>Tab panel content 1</div>
            <div>Tab panel content 2</div>
        </Tab>);
        wrapper.instance().changeTab(1);
        expect(wrapper.state('tabIndex')).toBe(1);
    });

});

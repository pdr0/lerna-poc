// @flow
import * as React from "react";
import { shallow } from "enzyme";
import TabItem from "../../../../main/react/tabs/TabItem";

describe("TabItem tests", () => {
    it("Should render", () => {
        const onClick = jest.fn();
        const wrapper = shallow(<TabItem index={0} text={"Some text"} onClick={onClick}/>);
        expect(wrapper.find(".l-tab").length).toBe(1);
    });

    it("Should render with extra class", () => {
        const onClick = jest.fn();
        const wrapper = shallow(<TabItem index={1} className={"test"} text={"Some text two"} onClick={onClick}/>);
        expect(wrapper.find(".l-tab.test").length).toBe(1);
    });

    it("Should click", () => {
        const onClick = jest.fn();
        const wrapper = shallow(<TabItem index={1} className={"test"} text={"Some text two"} onClick={onClick}/>);
        wrapper.simulate('click');
        expect(onClick.mock.calls).toHaveLength(1);
    });
});

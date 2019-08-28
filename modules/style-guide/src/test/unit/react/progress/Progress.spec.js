// @flow
import * as React from "react";
import { shallow } from "enzyme";
import Progress from "../../../../main/react/progress/Progress";

describe("Progress tests", () => {
    it("Should render", () => {
        const wrapper = shallow(<Progress>
            <div>test0</div>
            <div>test1</div>
            <div>test2</div>
            <div>test3</div>
        </Progress>);
        expect(wrapper.find(".l-progress").length).toBe(4);
        wrapper.find(".l-progress").forEach((nodeWrapper, index) => {
            expect(nodeWrapper.find(".l-progress-step").text()).toBe(`${index + 1}`);
            expect(nodeWrapper.find(".l-progress-content").text()).toBe(`test${index}`);
        });
    });
});

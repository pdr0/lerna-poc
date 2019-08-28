// @flow
import * as React from "react";
import { shallow } from "enzyme";
import { LotteryBall } from "../../../../main/react/lotteryBall/LotteryBall";

describe("LotteryBall tests", () => {
    it("Should render", () => {
        const wrapper = shallow(<LotteryBall>x1</LotteryBall>);
        expect(wrapper.find("li.l-lottery-number").length).toBe(1);
        expect(wrapper.find("li.l-lottery-number.test").length).toBe(0);
        expect(wrapper.find("li.l-lottery-number").text()).toBe("x1");
    });

    it("Should render an extra class", () => {
        const wrapper = shallow(<LotteryBall className="test">x1</LotteryBall>);
        expect(wrapper.find("li.l-lottery-number.test").length).toBe(1);
    });
});

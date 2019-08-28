// @flow
import * as React from "react";
import { shallow } from "enzyme";
import { LotteryBalls } from "../../../../main/react/lotteryBalls/LotteryBalls";

describe("LotteryBalls tests", () => {
    it("Should render", () => {
        const wrapper = shallow(<LotteryBalls numbers={[1, 2, 3, 11, 22]}/>);
        expect(wrapper.find('ul.l-lottery-numbers').length).toBe(1);
        expect(wrapper.find('ul.l-lottery-numbers.test').length).toBe(0);
        expect(wrapper.find('LotteryBall').length).toBe(5);
        expect(wrapper.find('LotteryBall').map(lotteryBallWrapper => lotteryBallWrapper.prop('children'))).toEqual([1, 2, 3, 11, 22]);
    });

    it("Should render with an extra className", () => {
        const wrapper = shallow(<LotteryBalls className="test" numbers={[1, 2, 3, 11, 22]}/>);
        expect(wrapper.find('ul.l-lottery-numbers.test').length).toBe(1);
    });
});

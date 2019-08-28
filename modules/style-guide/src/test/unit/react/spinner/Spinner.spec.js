// @flow
import * as React from "react";
import { shallow } from "enzyme";
import { Spinner } from "../../../../main/react/spinner/Spinner";

describe("Spinner tests", () => {
    it("Should render", () => {
        const wrapper = shallow(<Spinner/>);
        expect(wrapper.find(".l-spinner").length).toBe(1);
        expect(wrapper.find(".l-spinner-container").length).toBe(1);
        expect(wrapper.find(".l-spinner-token").length).toBe(1);
    });

    it("Should render with extra class", () => {
        const wrapper = shallow(<Spinner className="test"/>);
        expect(wrapper.find(".l-spinner.test").length).toBe(1);
    });


});

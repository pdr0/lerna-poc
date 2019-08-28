import React from "react";
import { shallow } from "enzyme";
import Modal from "../../../../main/react/modal/Modal";

describe("Modal tests", () => {
    beforeEach(() => {
        document.body.style.overflow = "";
    });

    afterEach(() => {
        document.body.style.overflow = "";
    });

    it("It should render", () => {
        const wrapper = shallow(<Modal className="test" displayed={true} showClose={true}>Test</Modal>);
        wrapper.update();
        expect(wrapper.find(".modal-container").length).toBe(1);
        expect(wrapper.find(".modal-close").length).toBe(1);
        expect(wrapper.find(".test").length).toBe(1);
        expect(wrapper.find(".test").text()).toBe("Test");
        expect(document.body.style.overflow).toBe("");
    });

    it("Should not show the close button", () => {
        const wrapper = shallow(<Modal className="test" displayed={true} showClose={false}>Test</Modal>);
        expect(wrapper.find(".modal-close").length).toBe(0);
    });

    it("Should not render anything", () => {
        const wrapper = shallow(<Modal className="test" displayed={false} showClose={false}>Test</Modal>);
        expect(wrapper.find(".modal-container").length).toBe(0);
    });

    it("Should make the page not srollable", () => {
        const wrapper = shallow(<Modal className="test" displayed={false} showClose={false}>Test</Modal>);
        wrapper.setProps({ displayed: true });
        expect(document.body.style.overflow).toBe("hidden");
    });

    it("Should make the page scrollable again when it is closed", () => {
        const wrapper = shallow(<Modal className="test" displayed={true} showClose={false}>Test</Modal>);
        wrapper.setProps({ displayed: false });
        expect(document.body.style.overflow).toBe("");
    });

    it("Should make the modal visible above the header in mobile", () => {
        const pageMainContainer = document.createElement("div");
        pageMainContainer.className = "page-main";
        document.body.appendChild(pageMainContainer);
        const wrapper = shallow(<Modal className="test" displayed={false} showClose={false}>Test</Modal>);
        wrapper.setProps({ displayed: true });
        expect(document.querySelector(".page-main").style.zIndex).toBe("auto");
        document.body.removeChild(pageMainContainer);
    });

    it("Should leave the page as it was when the modal is closed", () => {
        const pageMainContainer = document.createElement("div");
        pageMainContainer.className = "page-main";
        document.body.appendChild(pageMainContainer);
        const wrapper = shallow(<Modal className="test" displayed={true} showClose={false}>Test</Modal>);
        wrapper.setProps({ displayed: false });
        expect(document.querySelector(".page-main").style.zIndex).toBe("");
        document.body.removeChild(pageMainContainer);
    });

    it("Should leave the page as it was when the modal is unmounted", () => {
        const pageMainContainer = document.createElement("div");
        pageMainContainer.className = "page-main";
        document.body.appendChild(pageMainContainer);
        const wrapper = shallow(<Modal className="test" displayed={false} showClose={false}>Test</Modal>);
        wrapper.setProps({ displayed: true });
        wrapper.unmount();
        expect(document.querySelector(".page-main").style.zIndex).toBe("");
        expect(document.body.style.overflow).toBe("");
        document.body.removeChild(pageMainContainer);
    });
});

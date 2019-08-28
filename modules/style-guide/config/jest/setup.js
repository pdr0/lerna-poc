import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });

global.customElements = {
    define: jest.fn()
};
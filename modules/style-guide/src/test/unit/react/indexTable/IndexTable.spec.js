// @flow
import * as React from "react";
import { shallow } from "enzyme";
import { IndexTable } from "../../../../main/react/indexTable/IndexTable";

describe("IndexTable tests", () => {
    const columns = [{
        key: "index",
        title: "Index",
        dataIndex: "name"
    }, {
        key: "value",
        title: "Opening price",
        dataIndex: "price"
    }];

    const dataSource = [{
        name: "Dow Jones",
        price: "29.8762,28"
    }, {
        name: "Nasdaq",
        price: "13.921,91"
    }, {
        name: "S&P 500",
        price: "4.482,86"
    }, {
        name: "NYSE Composite",
        price: "87.300,46"
    }];

    it("Should render", () => {
        const wrapper = shallow(<IndexTable columns={columns} dataSource={dataSource}/>);
        expect(wrapper.find(".l-index-table").length).toBe(1);
        expect(wrapper.find(".l-index-table.test").length).toBe(0);
        expect(wrapper.find("thead tr th").length).toBe(2);
        expect(wrapper.find("thead tr th").at(0).text()).toBe(columns[0].title);
        expect(wrapper.find("thead tr th").at(1).text()).toBe(columns[1].title);
        expect(wrapper.find("tbody tr td").length).toBe(8);
        expect(wrapper.find("tbody tr td").at(0).text()).toBe(dataSource[0].name);
        expect(wrapper.find("tbody tr td").at(1).text()).toBe(dataSource[0].price);
        expect(wrapper.find("tbody tr td").at(4).text()).toBe(dataSource[2].name);
        expect(wrapper.find("tbody tr td").at(5).text()).toBe(dataSource[2].price);
    });

    it("Should render with an extra class", () => {
        const wrapper = shallow(<IndexTable className="test" columns={columns} dataSource={dataSource}/>);
        expect(wrapper.find(".l-index-table.test").length).toBe(1);
    });

    it("Should be able to render custom columns", () => {
        const columnsCustom = [{
            key: "index",
            title: "Index",
            dataIndex: "name",
            render: (name, index) => <span className="test-name">{name}, {index}</span>
        }, {
            key: "value",
            title: "Opening price",
            dataIndex: "price"
        }];
        const wrapper = shallow(<IndexTable columns={columnsCustom} dataSource={dataSource}/>);
        expect(wrapper.find("span.test-name").length).toBe(4);
        expect(wrapper.find("span.test-name").at(0).text()).toBe("Dow Jones, 0");
        expect(wrapper.find("span.test-name").at(3).text()).toBe("NYSE Composite, 3");
    });
});

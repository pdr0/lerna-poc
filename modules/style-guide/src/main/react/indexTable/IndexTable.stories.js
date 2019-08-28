// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import IndexTable from "./IndexTable";

const columns = [
    {
        key: "index",
        title: "Index",
        dataIndex: "name"
    },
    {
        key: "value",
        title: "Opening price",
        dataIndex: "price"
    }
];

const dataSource = [
    {
        name: "Dow Jones",
        price: "29.8762,28"
    },
    {
        name: "Nasdaq",
        price: "13.921,91"
    },
    {
        name: "S&P 500",
        price: "4.482,86"
    },
    {
        name: "NYSE Composite",
        price: "87.300,46"
    }
];

storiesOf("Indices table", module).add("default", () => <IndexTable columns={columns} dataSource={dataSource} />);

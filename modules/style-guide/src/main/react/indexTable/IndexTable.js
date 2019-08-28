//@flow
import * as React from "react";
import classNames from "classnames";

type IndexTableColumn = {
    title: string,
    dataIndex: string,
    key: string,
    render?: (any, number) => React.Node
};

type IndexTableProps = {
    columns: Array<IndexTableColumn>,
    dataSource: Array<any>,
    getDataKey: (any, number) => string,
    className?: string
};

export const IndexTable = (props: IndexTableProps) => {
    return (
        <table className={classNames("l-index-table", props.className)}>
            <thead>
                <tr>
                    {props.columns.map(column => (
                        <th key={column.key}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.dataSource.map((data, dataSourceIndex) => (
                    <tr key={props.getDataKey(data, dataSourceIndex)}>
                        {props.columns.map((column, columnIndex) => (
                            <td key={`_column_${column.key}_${dataSourceIndex}_${columnIndex}`}>
                                {column.render
                                    ? column.render(data[column.dataIndex], dataSourceIndex)
                                    : data[column.dataIndex]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

IndexTable.defaultProps = {
    getDataKey: (data, index) => index.toString()
};

IndexTable.displayName = "IndexTable";

export default IndexTable;

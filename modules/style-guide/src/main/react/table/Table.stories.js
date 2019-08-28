import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

storiesOf("Table", module).add(
    "default",
    withInfo("Basic Table")(() => (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>12.12.2012 12:12</td>
                    <td>Just a row ...</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>11.11.2011 11:11</td>
                    <td>Just a row ...</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>10.10.2010 10:10</td>
                    <td>Just a row ...</td>
                </tr>
            </tbody>
        </table>
    ))
);

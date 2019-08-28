import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import * as icons from "../../constants/Icons";
import Icon from "./Icon";

storiesOf("Icon", module).add(
    "available icons",
    withInfo()(() => (
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            {Object.values(icons).map((icon, index) => {
                return (
                    <li
                        style={{
                            display: "inline-block",
                            padding: "10px 15px",
                            textAlign: "center",
                            width: "100px",
                            verticalAlign: "top"
                        }}
                        key={index}
                    >
                        <Icon name={icon} style={{ fontSize: "24px", marginBottom: "7px" }} />
                        <div style={{ wordBreak: "break-all" }}>{icon}</div>
                    </li>
                );
            })}
        </ul>
    ))
);

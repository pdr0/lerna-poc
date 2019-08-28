// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import Notification from "./Notification";

storiesOf("Notifications", module)
    .add("success", () => (
        <Notification type="success">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis dicta dolore dolores fugiat, in labore
            maiores neque omnis placeat quos repellendus sequi suscipit tempore voluptatum! Culpa, id odit!
        </Notification>
    ))

    .add("warning", () => (
        <Notification type="warning">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis dicta dolore dolores fugiat, in labore
            maiores neque omnis placeat quos repellendus sequi suscipit tempore voluptatum! Culpa, id odit!
        </Notification>
    ))

    .add("info", () => (
        <Notification type="info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis dicta dolore dolores fugiat, in labore
            maiores neque omnis placeat quos repellendus sequi suscipit tempore voluptatum! Culpa, id odit!
        </Notification>
    ))

    .add("error", () => (
        <Notification type="error">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis dicta dolore dolores fugiat, in labore
            maiores neque omnis placeat quos repellendus sequi suscipit tempore voluptatum! Culpa, id odit!
        </Notification>
    ));

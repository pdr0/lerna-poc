// @flow
import * as React from "react";
import PropTypes from "prop-types";
import * as icons from "../../constants/Icons";
import Icon from "../typography/Icon";
import classNames from "classnames";

type NotificationProps = {
    children?: React.Node,
    type: string
};

const notificationIcons = {
    success: icons.CheckCircle2,
    info: icons.Information,
    error: icons.Alert1,
    warning: icons.Alert2
};

export const Notification = (props: NotificationProps) => {
    return (
        <div className={classNames("notification", `notification-${props.type}`)}>
            <div className="notification-icon">
                <Icon name={notificationIcons[props.type]} />
            </div>
            <div className="notification-content">{props.children}</div>
        </div>
    );
};

Notification.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string.isRequired
};

Notification.displayName = "Notification";

export default Notification;

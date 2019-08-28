// @flow

import * as React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import * as icons from "../../constants/Icons";
import Icon from "../typography/Icon";

type Props = {
    success?: boolean,
    children: React.Node
};

const Message = ({ success, children }: Props) => {
    const classes = classNames("message", {
        "message-success": success
    });
    return (
        <div className={classes}>
            <Icon className="message-icon" name={icons.CheckCircle2} />
            <span className="message-text t-message-text">{children}</span>
        </div>
    );
};

Message.propTypes = {
    success: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Message.defaultProps = {
    success: true
};

export default Message;

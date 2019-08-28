// @flow

import * as React from "react";
import * as PropTypes from "prop-types";
import * as icons from "../../constants/Icons";
import Icon from "../typography/Icon";

type Props = {
    children: React.Node,
    onClose: Function,
    displayed?: boolean,
    trackName?: string
};

const GrowlMessage = ({ children, onClose, displayed, trackName }: Props) => {
    if (!displayed) {
        return null;
    }

    return (
        <div className="l-growlMessage t-growlMessage">
            <Icon className="l-growlMessage-icon" name={icons.Bell} />
            <div className="l-growlMessage-content t-growlMessage-content">{children}</div>
            <Icon className="l-growlMessage-close" name={icons.Delete1} data-track-name={trackName} onClick={onClose} />
        </div>
    );
};

GrowlMessage.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
    displayed: PropTypes.bool,
    trackName: PropTypes.string
};

GrowlMessage.defaultProps = {
    displayed: false
};

export default GrowlMessage;

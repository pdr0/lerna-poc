// @flow

import * as React from "react";
import * as PropTypes from "prop-types";
import CTA from "../CTA/CTA";

export type Props = {
    onConfirm: (event: Event) => void,
    onAbort: (event: Event) => void,
    confirmText: string,
    abortText: string,
    messageText: string
};

const Confirmation = ({ onConfirm, onAbort, confirmText, abortText, messageText }: Props) => (
    <div className="confirmation">
        <div className="confirmation-message t-message-text">{messageText}</div>
        <div className="confirmation-actions">
            <CTA className="confirmation-action confirmation-abort t-abort-button" type="link" onClick={onAbort}>
                {abortText}
            </CTA>
            <CTA className="confirmation-action t-confirm-button" type="secondary" onClick={onConfirm}>
                {confirmText}
            </CTA>
        </div>
    </div>
);

Confirmation.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onAbort: PropTypes.func.isRequired,
    confirmText: PropTypes.string.isRequired,
    abortText: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired
};

export default Confirmation;

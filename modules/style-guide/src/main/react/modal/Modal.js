// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

type Props = {
    /** Indicates if overlay is displayed. Pass false to hide it */
    displayed: boolean,

    /** Possibility to extend classes */
    className?: string,

    /** React nodes which should get rendered into Overlay */
    children?: React.Node,

    showClose: boolean,

    onClose?: Function
};

/**
 * Displays an modal.
 */
class Modal extends React.Component<Props> {
    static propTypes = {
        displayed: PropTypes.bool.isRequired,
        className: PropTypes.string,
        children: PropTypes.node,
        showClose: PropTypes.bool.isRequired,
        onClose: PropTypes.func
    };

    static defaultProps = {
        showClose: true
    };

    static openModal() {
        document && document.body && (document.body.style.overflow = "hidden");
        const pageMain = document.querySelector(".page-main");
        if (pageMain) {
            pageMain.style.zIndex = "auto";
        }
    }

    static closeModal() {
        document && document.body && (document.body.style.overflow = "");
        const pageMain = document.querySelector(".page-main");
        if (pageMain) {
            pageMain.style.zIndex = "";
        }
    }

    componentDidUpdate() {
        this.props.displayed ? Modal.openModal() : Modal.closeModal();
    }

    componentWillUnmount() {
        Modal.closeModal();
    }

    render() {
        const { displayed, className, children, showClose, onClose, ...props } = this.props;
        if (!displayed) {
            return null;
        }

        const classes = classNames("modal", className);
        return (
            <div className="modal-container">
                <div className={classes} {...props}>
                    <div className="modal-content">
                        {showClose && <i className="modal-close icon icon-delete-1" onClick={onClose} />}
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;

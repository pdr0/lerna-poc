// @flow

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import type { OverlayPosition } from "../../types/overlay/OverlayPosition";
import { OverlayPositionPropType } from "../../types/overlay/OverlayPosition";

type Props = {
    /** Indicates if overlay is displayed. Pass false to hide it */
    displayed: boolean,

    /** Where to show the overlay. Valid values are top, right, bottom, left */
    position: OverlayPosition,

    /** Should be horizontally centered (useful in combination with position top & bottom) */
    center?: boolean,

    /** Should be vertically centered (useful in combination with position left & right) */
    middle?: boolean,

    /** Possibility to extend classes */
    className?: string,

    /** React nodes which should get rendered into Overlay */
    children?: React.Node,

    onClickOutside?: Function
};

/**
 * Displays an overlay.
 * ToDo: Write tests
 */
class Overlay extends React.Component<Props> {
    wrapperRef: ?HTMLDivElement;
    boundonClickOutside: Function;

    constructor(props: Props) {
        super(props);

        this.boundonClickOutside = this.onClickOutside.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", this.boundonClickOutside, true);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.boundonClickOutside, true);
    }

    onClickOutside(event: SyntheticEvent<HTMLElement>) {
        if (this.wrapperRef == null) {
            return;
        }

        const { onClickOutside } = this.props;
        const nativeEvent: any = event;
        let target: any;
        if (nativeEvent.composedPath && nativeEvent.composedPath()) {
            target = nativeEvent.composedPath()[0];
        } else {
            target = event.target;
        }
        // $FlowFixMe - falsely complains about 'contains not exists in undefined or null'
        let isInside = this.wrapperRef === target || this.wrapperRef.contains(target);
        if (!isInside && onClickOutside) {
            onClickOutside();
        }
    }

    render() {
        const { displayed, position, center, middle, className, children, onClickOutside, ...props } = this.props;

        if (!displayed) {
            return null;
        }

        const classes = classNames("overlay", `overlay-${position}`, className, {
            "overlay-center": center,
            "overlay-middle": middle
        });
        return (
            <div ref={ref => (this.wrapperRef = ref)} className={classes} {...props}>
                {children}
            </div>
        );
    }
}

Overlay.propTypes = {
    displayed: PropTypes.bool.isRequired,
    position: OverlayPositionPropType.isRequired,
    center: PropTypes.bool,
    middle: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Overlay;

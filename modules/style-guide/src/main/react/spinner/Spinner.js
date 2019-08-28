// @flow
import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

type SpinnerProps = {
    className?: string,
    text?: string
};

export const Spinner = (props: SpinnerProps) => {
    return (
        <section key="l-spinner" className={classNames("l-spinner", props.className)}>
            <div className="l-spinner-container">
                <div className="l-spinner-token" />
            </div>
            {props.text ? <div className="l-spinner-text">{props.text}</div> : null}
        </section>
    );
};

Spinner.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
};

Spinner.displayName = "Spinner";

export default Spinner;

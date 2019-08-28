// @flow
import * as React from "react";

type ProgressProps = {
    children: Array<React.Node>
};

export default function Progress(props: ProgressProps) {
    return (
        <React.Fragment>
            {props.children.map((children, index) => (
                <div key={index + 1} className="l-progress">
                    <div className="l-progress-step">{index + 1}</div>
                    <div className="l-progress-content">{children}</div>
                </div>
            ))}
        </React.Fragment>
    );
}

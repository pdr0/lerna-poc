import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs/react";
import { withState } from "@dump247/storybook-state";
import { createReactComponent } from "../createReactComponent";
import "./StickyPanel";

const StickyPanel = createReactComponent("ll-sticky-panel");

storiesOf("Web Components/StickyPanel", module)
    .addDecorator(withKnobs)
    .add(
        "Dynamic",
        withState({ status: "hidden" }, store => {
            const heightCollapsed = number("Content height collapsed", 103);
            const heightExpanded = number("Content height expanded", 800);
            const { status } = store.state;

            function renderContent(status) {
                if (status === "collapsed") {
                    return <div style={{ height: `${heightCollapsed}px` }}>{status}</div>;
                }
                if (status === "expanded") {
                    return <div style={{ height: `${heightExpanded}px` }}>{status}</div>;
                }
                return <div>{status}</div>;
            }

            return (
                <div>
                    {status === "hidden" && (
                        <React.Fragment>
                            <button onClick={() => store.set({ status: "collapsed" })}>Collapsed widget</button>
                            <br />
                        </React.Fragment>
                    )}
                    {(status === "collapsed" || status === "expanded") && (
                        <React.Fragment>
                            <button onClick={() => store.set({ status: "hidden" })}>Back to no widget</button>
                        </React.Fragment>
                    )}
                    {status === "collapsed" && (
                        <React.Fragment>
                            <button onClick={() => store.set({ status: "expanded" })}>Expanded widget</button>
                            <br />
                        </React.Fragment>
                    )}
                    {status === "expanded" && (
                        <React.Fragment>
                            <button onClick={() => store.set({ status: "collapsed" })}>Colapsed widget</button>
                            <br />
                        </React.Fragment>
                    )}
                    <StickyPanel state={status} onChange={event => store.set({ status: event.detail })}>
                        {renderContent(status)}
                    </StickyPanel>
                </div>
            );
        })
    )
    .add("hidden", () => <StickyPanel state="hidden">Hidden</StickyPanel>)
    .add("Collapsed", () => (
        <StickyPanel state="collapsed">
            <div style={{ height: "103px" }}>Collapsed</div>
        </StickyPanel>
    ))
    .add("expanded", () => (
        <StickyPanel state="expanded">
            <div style={{ height: "800px" }}>Expanded</div>
        </StickyPanel>
    ));

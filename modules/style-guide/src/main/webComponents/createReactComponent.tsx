// https://github.com/ionic-team/ionic/blob/master/react/src/components/createComponent.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { dashToPascalCase, attachEventProps } from './utils';

export function createReactComponent<T extends object, E>(tagName: string, syncEvents: Array<string> = [ "Change" ]) {
    const displayName = dashToPascalCase(tagName);

    type IonicReactInternalProps = {
        forwardedRef?: React.RefObject<E>;
        children?: React.ReactNode;
    }
    type InternalProps = T & IonicReactInternalProps;

    type IonicReactExternalProps = {
        ref?: React.RefObject<E>;
        children?: React.ReactNode;
    }

    class ReactComponent extends React.Component<InternalProps> {
        componentRef: React.RefObject<E>;

        constructor(props: T & IonicReactInternalProps) {
            super(props);
            this.componentRef = React.createRef();
        }

        static get displayName() {
            return displayName;
        }

        componentDidMount() {
            this.componentWillReceiveProps(this.props);
        }

        componentWillReceiveProps(props: InternalProps) {
            const node = ReactDOM.findDOMNode(this) as HTMLElement;

            attachEventProps(node, props, syncEvents);
        }

        render() {
            const { children, forwardedRef, ...cProps } = this.props;
            const props = removeFalseBooleanProps(cProps);

            return React.createElement(
                tagName,
                {
                    ...props,
                    ref: forwardedRef
                },
                children
            );
        }
    }

    function forwardRef(props: InternalProps, ref: React.RefObject<E>) {
        return <ReactComponent {...props} forwardedRef={ref} />;
    }
    forwardRef.displayName = displayName;

    // @ts-ignore
    return React.forwardRef<E, T & IonicReactExternalProps>(forwardRef);
}

function removeFalseBooleanProps(props: any) {
    const newProps = { ...props };
    Object.entries(newProps).forEach(([name, value]) => {
        if (typeof value === "boolean" && !value) {
            delete newProps[name];
        }
    });
    return newProps;
}

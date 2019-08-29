import * as React from 'react';
import PropTypes from 'prop-types';
import wrapper, {renderReactComponent} from '../../main/wrapper';

describe('Web components wrapper generator', () => {
    let customElements;
    const TestComponent = () => (
        <div>Test Component</div>
    );

    beforeEach(() => {
        customElements = window.customElements;
    });

    afterEach(() => {
        window.customElements = customElements;
    });

    it('should define custom element', () => {
        let defineMock = jest.fn();
        window.customElements = {define: defineMock};

        wrapper('test', TestComponent);

        expect(defineMock.mock.calls.length).toBe(1);
        expect(defineMock.mock.calls[0][0]).toBe('ll-test');
        expect(defineMock.mock.calls[0][1].prototype instanceof HTMLElement).toBe(true); // returned class extends HTMLElement
    });

    it('should render react component', () => {
        const target = document.createElement('div');
        renderReactComponent(TestComponent, '', target, {}, false);
        expect(target.innerHTML).toBe('<div>Test Component</div>')
    });

    it('should render react component with props', () => {
        const TestComponentWithProps = ({a, b}) => (
            <div>Test Component {a} {b}</div>
        );
        TestComponentWithProps.propTypes = {
            a: PropTypes.string,
            b: PropTypes.string,
        };

        const target = document.createElement('div');
        const attribs = {a: 'a', b: 'b'};
        renderReactComponent(TestComponentWithProps, '', target, attribs, true);
        expect(target.innerHTML).toBe('<div>Test Component a b</div>')
    });

    // ToDo: Should be implemented again as soon as we are able to check which prop is required or not
    // ToDo: Hint:
    // ToDo:     const propTypes = {
    // ToDo:         a: PropTypes.bool.isRequired,
    // ToDo:         b: PropTypes.bool
    // ToDo:     };
    // ToDo:     const err = propTypes['a']({a: 'test'}, 'a', 'MyComponent', 'prop', null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
    // it('should render react component without given optional props', () => {
    //     const TestComponentWithOptionalProps = ({z}) => (
    //         <div>Test Component {z}</div>
    //     );
    //     TestComponentWithOptionalProps.propTypes = {
    //         z: PropTypes.string
    //     };
    //
    //     const target = document.createElement('div');
    //     const attribs = {};
    //     renderReactComponent(TestComponentWithOptionalProps, '', target, attribs, true);
    //     expect(target.innerHTML).toBe('<div>Test Component </div>')
    // });

    it('should not render react component without given required props', () => {
        const TestComponentWithOptionalProps = ({a}) => (
            <div>Test Component {a}</div>
        );
        TestComponentWithOptionalProps.propTypes = {
            a: PropTypes.string.isRequired,
            b: PropTypes.string
        };

        const target = document.createElement('div');
        const attribs = {};
        const result = renderReactComponent(TestComponentWithOptionalProps, '', target, attribs, true);
        expect(result).toBeNull();
    });

    it('should render react component with HTMLElement children as text', () => {
        const TestComponentWithChildren = ({children}) => (
            <div>Test Component {children}</div>
        );
        TestComponentWithChildren.propTypes = {
            children: PropTypes.node
        };

        const target = document.createElement('div');
        renderReactComponent(TestComponentWithChildren, 'hi', target, {}, false);
        expect(target.innerHTML).toBe('<div>Test Component hi</div>');
    });
});
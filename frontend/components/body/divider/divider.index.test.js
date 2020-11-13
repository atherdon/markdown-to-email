import React from "react";
import { create } from "react-test-renderer";
import Divider from "./index";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";

afterEach(() => {
    cleanup();
});

describe("divider/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(React.createElement(Divider, null), div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('renders correctly', () => {
        const tree = create(React.createElement(
            Divider,
            null,
            React.createElement(
                "h1",
                null,
                "Some text"
            )
        ));
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("compoents props should contain children(h1) elements", () => {
        const component = create(React.createElement(
            Divider,
            null,
            React.createElement(
                "h1",
                null,
                "Some text"
            )
        ));
        const root = component.root;

        expect(root.props.children.type).toBe("h1");
    });

    test("<td> has correct children elements", () => {
        const { getByTestId } = render(React.createElement(
            Divider,
            null,
            React.createElement(
                "h1",
                null,
                "Hello"
            )
        ));
        const td = getByTestId("dividerChildrenTest");

        expect(td.children[0].textContent).toBe("Hello");
    });
});
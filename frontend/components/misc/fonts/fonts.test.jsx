import ReactDOM from "react-dom";
import Fonts from "./index";
import React from "react";
import {cleanup, render} from "@testing-library/react";
import {create} from "react-test-renderer";

afterEach(() => {
    cleanup()
});

describe("fonts/index component", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Fonts />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    test('renders correctly', () => {
        const tree = create(<Fonts />)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    test("<link> has correct href", () => {
        const {getByTestId} = render(<Fonts />)
        const link = getByTestId("fontsHrefTest")

        expect(link.href).toBe("https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Merriweather+Sans:400,400i,700,700i|Source+Sans+Pro:400,400i,700,700i")
    });

})
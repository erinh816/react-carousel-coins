import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card
    caption="this is a shell"
    src="http://shellimge.jpeg"
    currNum={1}
    totalNum={1} />);
});

it("matches snapshot", function () {
  const { container } = render(<Card
    caption="this is a shell"
    src="http://shellimge.jpeg"
    currNum={1}
    totalNum={1} />);
  expect(container).toMatchSnapshot();
});

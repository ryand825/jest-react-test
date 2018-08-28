import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import NewMovie from "./NewMovie";

afterEach(cleanup);

test("<NewMovie>", () => {
  const { debug, getByTestId, queryByTestId, container, getByText } = render(
    <NewMovie />
  );
  expect(getByTestId("page-title").textContent).toBe("New Movie");
  expect(queryByTestId("movie-form").tagName).toBe("FORM");
  // debug();
  expect(container.firstChild).toMatchSnapshot();
  // console.log(container.firstChild.tagName);

  fireEvent.click(getByText("Submit"));
});

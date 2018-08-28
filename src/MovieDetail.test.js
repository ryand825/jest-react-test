import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import MovieDetail from "./MovieDetail";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup;
  console.error.mockClear();
});

const match = {
  params: {
    id: "1234"
  }
};

console.error = jest.fn();
const movie = {
  id: "1234",
  title: "movie title 2"
};

test("<Movie>", async () => {
  fetch.mockResponseOnce(JSON.stringify(movie));

  const { debug, getByText, getByTestId } = render(
    <MovieDetail match={match} />
  );
  await waitForElement(() => getByTestId("movie-title"));

  expect(getByTestId("movie-title").textContent).toBe(movie.title);
  // debug();
});

import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import Movie, { POSTER_PATH } from "./Movie";

afterEach(() => {
  cleanup;
  console.error.mockClear();
});

console.error = jest.fn();

test("<Movie>", () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalledTimes(1);
});

const movie = {
  id: "hi",
  title: "movie title",
  poster_path: "poster.jpg"
};

test("<Movie> with Movie", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId("movie-link").getAttribute("href")).toBe("/" + movie.id);
  expect(getByTestId("movie-img").src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
});

import { getMovieName } from "./getMovieName";
import { TMovie } from "../MoviesList";

describe("getMovieName", () => {
  it("should correctly return name if there are no title and name", () => {
    const movie: TMovie = {
      backdrop_path: "string;m",
      genre_ids: [1],
      id: 1,
      original_language: "string;m",
      overview: "string;m",
      poster_path: "string;m",
      vote_average: 1,
      vote_count: 1,
      popularity: 1,
    };

    const result = getMovieName(movie);
    expect(result).toEqual("Unknown Title");
  });

  it("should correctly return name if there is title", () => {
    const movie: TMovie = {
      title: "fake title",
      backdrop_path: "string;m",
      genre_ids: [1],
      id: 1,
      original_language: "string;m",
      overview: "string;m",
      poster_path: "string;m",
      vote_average: 1,
      vote_count: 1,
      popularity: 1,
    };

    const result = getMovieName(movie);
    expect(result).toEqual(movie.title);
  });

  it("should correctly return name if there is name", () => {
    const movie: TMovie = {
      name: "fake name",
      backdrop_path: "string;m",
      genre_ids: [1],
      id: 1,
      original_language: "string;m",
      overview: "string;m",
      poster_path: "string;m",
      vote_average: 1,
      vote_count: 1,
      popularity: 1,
    };

    const result = getMovieName(movie);
    expect(result).toEqual(movie.name);
  });

  it("should correctly return name if there is name and a title", () => {
    const movie: TMovie = {
      name: "fake name",
      title: "fake title",
      backdrop_path: "string;m",
      genre_ids: [1],
      id: 1,
      original_language: "string;m",
      overview: "string;m",
      poster_path: "string;m",
      vote_average: 1,
      vote_count: 1,
      popularity: 1,
    };

    const result = getMovieName(movie);
    expect(result).toEqual(movie.title);
  });
});

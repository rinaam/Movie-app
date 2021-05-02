import { TMovie } from "../MoviesList";

export const getMovieName = (movie: TMovie): string =>
  movie.title || movie.name || "Unknown Title";

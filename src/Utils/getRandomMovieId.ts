import { TMovie } from "./../Containers/MoviesList/MoviesList";

export const getRandomMovieId = (movies: TMovie[]): number => {
  const randomNumber = Math.floor(Math.random() * movies.length);
  const randomMovieId = movies[randomNumber].id;
  return randomMovieId;
};

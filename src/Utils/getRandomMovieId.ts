import { TMovie } from "./../Containers/MoviesList/MoviesList";

export const getRandomMovieId = (genreId: number, movies: TMovie[]): number => {
  const allMovies = movies.filter((result) =>
    result.genre_ids.includes(genreId)
  );
  const randomNumber = Math.floor(Math.random() * allMovies.length);
  const randomMovieId = allMovies[randomNumber].id;
  return randomMovieId;
};

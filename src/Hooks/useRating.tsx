import { useState } from "react";

export type TRateMovie = (grade: number) => void;

export type TUseRating = (args: { movieId: string }) => [number, TRateMovie];

export const useRating: TUseRating = ({ movieId }) => {
  const [movieRating, setMovieRating] = useState<number>(
    parseInt(localStorage.getItem(`movie-${movieId}-rating`) || "0", 10)
  );

  const rateMovie: TRateMovie = (grade) => {
    localStorage.setItem(`movie-${movieId}-rating`, `${grade}`);
    setMovieRating(grade);
  };

  return [movieRating, rateMovie];
};

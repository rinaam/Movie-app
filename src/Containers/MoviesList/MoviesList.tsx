import React from "react";
import "./MoviesList.scss";

import CardComponent from "../../Components/CardComponent/CardComponent";
import { getMovieName } from "./Utils/getMovieName";
import { getReleaseDate } from "./Utils/getReleaseDate";
import { formatMoviePosterUrl } from "../../Components/ImageComponent/Utils/formatMoviePosterUrl";
import { ImageSizes } from "../../Constants";

export type TMovie = {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
  first_air_date?: string;
  name?: string;
  origin_country?: string[];
  original_name?: string;
};

export interface IMovieListProps {
  items: TMovie[];
}

const MoviesList: React.FC<IMovieListProps> = ({ items }) => {
  const handleClick = () => {};
  return (
    <div className="movie-list">
      {items.map((item) => {
        const releiseDate = item.release_date || item.first_air_date;
        return (
          <CardComponent
            title={getMovieName(item)}
            content={`Language: ${item.original_language}`}
            grade={item.vote_average}
            imageAsBackground
            imgUrl={formatMoviePosterUrl({
              size: ImageSizes.l,
              imageUrl: item.poster_path,
            })}
            onClick={handleClick}
            key={item.id}
            titleSufix={getReleaseDate(releiseDate)}
          />
        );
      })}
    </div>
  );
};

export default MoviesList;

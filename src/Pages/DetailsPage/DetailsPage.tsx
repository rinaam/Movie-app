import React from "react";
import "./DetailsPage.scss";
import { useQuery } from "react-query";
import ContainerComponent from "../../Components/ContainerComponent/ContainerComponent";
import ImageCardComponent from "../../Components/ImageCardComponent/ImageCardComponent";
import RatingComponent from "../../Components/RatingComponent/RatingComponent";
import BasicListComponent from "../../Components/BasicListComponent/BasicListComponent";
import { useParams } from "react-router-dom";
import { getReleaseDate } from "../../Utils/getReleaseDate";
import { useRating } from "../../Hooks/useRating";
import { formatMoviePosterUrl } from "../../Components/ImageComponent/Utils/formatMoviePosterUrl";
import { ImageSizes, environmentVariables } from "../../Constants";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
  }[];

  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieRating, setMovieRating] = useRating({ movieId: id });

  const movieResponse = useQuery<IMovie>(
    "movieDetailsCashKey",
    () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${environmentVariables.apiKey}`
      ).then((res) => res.json()),
    {
      enabled: true,
    }
  );

  const getProductionCompanies = movieResponse.data?.production_companies
    .map((item) => item.name)
    .join(", ");

  const basicListItems = [
    {
      title: "Rating:",
      sufix: `${movieResponse.data?.vote_average}`,
    },
    {
      title: "Popularity",
      sufix: `${movieResponse.data?.popularity}`,
    },
    {
      title: "Language",
      sufix: `${movieResponse.data?.original_language}`,
    },
    {
      title: "Production Companies",
      sufix: `${getProductionCompanies}`,
    },
  ];
  return (
    <ContainerComponent>
      <>
        {movieResponse.isLoading && <div>Loading</div>}
        {movieResponse.isError && <div>Something went wrong</div>}
        {movieResponse.data && (
          <>
            <div className="details-header">
              <p>{movieResponse.data?.title}</p>
              <p>({getReleaseDate(movieResponse.data?.release_date)})</p>
            </div>
            <ImageCardComponent
              imageUrl={formatMoviePosterUrl({
                size: ImageSizes.xl,
                imageUrl: movieResponse.data.poster_path,
              })}
              description={movieResponse.data.overview}
              alt={movieResponse.data.title}
            />
            <div className="details-data">
              <div className="details-data-items">
                <BasicListComponent list={basicListItems} />
              </div>
              <RatingComponent
                rating={movieRating}
                onClick={(grade) => setMovieRating(grade)}
              />
            </div>
          </>
        )}
      </>
    </ContainerComponent>
  );
};

export default DetailsPage;

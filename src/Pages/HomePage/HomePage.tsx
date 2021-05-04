import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import ContainerComponent from "../../Components/ContainerComponent/ContainerComponent";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import ModalComponent from "../../Components/ModalComponent/ModalComponent";
import RadioGroupComponent from "../../Components/RadioGroupComponent/RadioGroupComponent";
import RandomIcon from "../../Assets/Icons/RandomIcon.svg";
import MoviesList from "../../Containers/MoviesList/MoviesList";
import { getRandomMovieId } from "../../Utils/getRandomMovieId";
import { PAGINATION_LIMIT, environmentVariables } from "../../Constants";
import "./HomePage.scss";

export interface IMovies {
  page: number;
  results: TMovie[];
  total_pages: number;
  total_results: number;
}

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
export interface IGenre {
  genres: TGenre[];
}

type TGenre = {
  id: number;
  name: string;
};

const HomePage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedGenere, setSelectedGenre] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [movieList, setMovieList] = useState<TMovie[]>([]);
  const history = useHistory();

  const moviesResponse = useQuery<IMovies>(
    ["moviesCashKey", page],
    () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${environmentVariables.apiKey}&page=${page}`
      ).then((res) => res.json()),
    { keepPreviousData: true, enabled: true }
  );

  const genresResponse = useQuery<IGenre>(
    "genreCashKey",
    () =>
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${environmentVariables.apiKey}`
      ).then((resp) => resp.json()),
    {
      enabled: true,
    }
  );

  const randomMoviesByGenreResponse = useQuery<IMovies>(
    ["randomMoviesByGenreCacheKey", selectedGenere],
    () =>
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${environmentVariables.apiKey}&with_genres=${selectedGenere}`
      ).then((resp) => resp.json()),
    {
      enabled: true,
    }
  );

  useEffect(() => {
    const newResults = moviesResponse.data?.results ?? [];
    setMovieList((oldState) => {
      return [...oldState, ...newResults];
    });
  }, [moviesResponse.data?.results]);

  const navigateToRandomMovie = (): void => {
    if ((randomMoviesByGenreResponse.data?.results ?? []).length > 0) {
      const randomMovieId = getRandomMovieId(
        randomMoviesByGenreResponse.data?.results || []
      );
      if (randomMovieId) {
        history.push(`/details/${randomMovieId}`);
      }
    }
  };

  return (
    <>
      {moviesResponse.isLoading && <div>Loading</div>}
      {moviesResponse.isError && <div>Something went wrong</div>}
      {moviesResponse.data && (
        <ContainerComponent>
          <>
            <MoviesList items={movieList} />
            {Boolean(page <= PAGINATION_LIMIT) && (
              <div className="btn-wrapper">
                <ButtonComponent
                  variant="round"
                  onClick={() => setPage(page + 1)}
                >
                  Load
                </ButtonComponent>
              </div>
            )}

            <ButtonComponent
              variant="floating"
              onClick={() => setOpenModal(true)}
            >
              <RandomIcon />
            </ButtonComponent>

            <ModalComponent
              title="Movie Roulette"
              open={openModal}
              onClose={() => setOpenModal(false)}
            >
              <div className="mdl-container">
                {genresResponse.isLoading && <div>Loading</div>}
                {genresResponse.isError && <div>Something went wrong</div>}
                <RadioGroupComponent
                  groupName="Genre"
                  items={genresResponse.data?.genres ?? []}
                  title="Select genre:"
                  onChange={setSelectedGenre}
                />
                <ButtonComponent
                  variant="primary"
                  onClick={navigateToRandomMovie}
                >
                  {randomMoviesByGenreResponse.isLoading ? (
                    <>Loading...</>
                  ) : (
                    <>Roll</>
                  )}
                </ButtonComponent>
              </div>
            </ModalComponent>
          </>
        </ContainerComponent>
      )}
    </>
  );
};

export default HomePage;

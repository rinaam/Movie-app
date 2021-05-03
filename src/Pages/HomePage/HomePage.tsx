import React, { useState } from "react";

import ContainerComponent from "../../Components/ContainerComponent/ContainerComponent";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import ModalComponent from "../../Components/ModalComponent/ModalComponent";
import RadioGroupComponent from "../../Components/RadioGroupComponent/RadioGroupComponent";
import RandomIcon from "../../Assets/Icons/RandomIcon.svg";
import MoviesList from "../../Containers/MoviesList/MoviesList";
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

export const genresMock: IGenre = {
  genres: [
    {
      id: 287,
      name: "Action",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 53,
      name: "Drama",
    },
  ],
};

export const moviesMock: IMovies = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 299536,
      original_language: "en",
      original_title: "Avengers: Infinity War",
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      release_date: "2018-04-25",
      title: "Avengers: Infinity War",
      video: false,
      vote_average: 8.3,
      vote_count: 6937,
      popularity: 358.799,
    },
    {
      adult: false,
      backdrop_path: "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
      genre_ids: [28, 35, 878],
      id: 383498,
      original_language: "en",
      original_title: "Deadpool 2",
      overview:
        "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
      poster_path: "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
      release_date: "2018-05-15",
      title: "Deadpool 2",
      video: false,
      vote_average: 7.6,
      vote_count: 3938,
      popularity: 223.011,
    },
    {
      adult: false,
      backdrop_path: "/22cUd4Yg5euCxIwWzXrL4m4otkU.jpg",
      genre_ids: [28, 878, 53],
      id: 500664,
      original_language: "en",
      original_title: "Upgrade",
      overview:
        "A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure — an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility — skills he uses to seek revenge against the thugs who destroyed his life.",
      poster_path: "/adOzdWS35KAo21r9R4BuFCkLer6.jpg",
      release_date: "2018-06-01",
      title: "Upgrade",
      video: false,
      vote_average: 7.6,
      vote_count: 138,
      popularity: 32.969,
    },
    {
      adult: false,
      backdrop_path: "/uZTtVdOEIwPA6vwVRI3217DoPM.jpg",
      genre_ids: [35, 10749],
      id: 466282,
      original_language: "en",
      original_title: "To All the Boys I've Loved Before",
      overview:
        "Lara Jean's love life goes from imaginary to out of control when her secret letters to every boy she's ever fallen for are mysteriously mailed out.",
      poster_path: "/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
      release_date: "2018-08-17",
      title: "To All the Boys I've Loved Before",
      video: false,
      vote_average: 8.4,
      vote_count: 349,
      popularity: 31.76,
    },
    {
      adult: false,
      backdrop_path: "/yRXzrwLfB5tDTIA3lSU9S3N9RUK.jpg",
      genre_ids: [35, 18],
      id: 455980,
      original_language: "en",
      original_title: "Tag",
      overview:
        "For one month every year, five highly competitive friends hit the ground running in a no-holds-barred game of tag they’ve been playing since the first grade. This year, the game coincides with the wedding of their only undefeated player, which should finally make him an easy target. But he knows they’re coming...and he’s ready.",
      poster_path: "/eXXpuW2xaq5Aen9N5prFlARVIvr.jpg",
      release_date: "2018-06-14",
      title: "Tag",
      video: false,
      vote_average: 7,
      vote_count: 285,
      popularity: 87.194,
    },
    {
      backdrop_path: "/hHEqDPbO6z4Xje5tOf3Wm1mdMtI.jpg",
      first_air_date: "2018-08-17",
      genre_ids: [16, 35, 10765],
      id: 73021,
      name: "Disenchantment",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Disenchantment",
      overview:
        "Set in a ruined medieval city called Dreamland, Disenchantment follows the grubby adventures of a hard-drinking princess, her feisty elf companion and her personal demon.",
      poster_path: "/c3cUb0b3qHlWaawbLRC9DSsJwEr.jpg",
      vote_average: 7.8,
      vote_count: 8,
      popularity: 19.929,
    },
  ],
  total_pages: 792,
  total_results: 15831,
};

const HomePage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    // do nothing for now
  };

  const handleChange = () => {
    // do nothing for now
  };

  return (
    <ContainerComponent>
      <>
        <MoviesList items={moviesMock.results} />
        <div className="btn-wrapper">
          <ButtonComponent variant="round" onClick={handleClick}>
            Load
          </ButtonComponent>
        </div>
        <ButtonComponent variant="floating" onClick={() => setOpenModal(true)}>
          <RandomIcon />
        </ButtonComponent>

        <ModalComponent
          title="Movie Roulette"
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <div className="mdl-container">
            <RadioGroupComponent
              groupName="Genre"
              items={genresMock.genres}
              title="Select genre:"
              onChange={handleChange}
            />
            <ButtonComponent variant="primary" onClick={handleClick}>
              Roll
            </ButtonComponent>
          </div>
        </ModalComponent>
      </>
    </ContainerComponent>
  );
};

export default HomePage;

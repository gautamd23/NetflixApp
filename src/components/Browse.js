import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Search from "./Search";
import { useSelector } from "react-redux";
import { showDetails } from "../utils/detailsToggle";
import MovieDetails from "./MovieDetails";

export default function Browse() {
  const searchToggle = useSelector((store) => store.search.searchToggle);
  const detailToggle = useSelector((store) => store.details?.detailToggle);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  console.log(detailToggle);
  return (
    <div>
      <Header />

      {searchToggle ? (
        <Search />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
}

import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

export default function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  );
}

import React from "react";
import SearchBar from "./SearchBar";
import { BG_IMG } from "../utils/constants";
import DisplaySearchedMovies from "./DisplaySearchedMovies";
import { useSelector } from "react-redux";

export default function Search() {
  const movies = useSelector((store) => store.movie?.searchedMovies);
  return (
    <div className="">
      <div className="absolute -z-10 ">
        <img className="object-cover  w-screen h-svh" src={BG_IMG}></img>
      </div>
      <SearchBar />
      <DisplaySearchedMovies movies={movies}/>
    </div>
  );
}

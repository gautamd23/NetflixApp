import React from "react";
import SearchBar from "./SearchBar";
import { BG_IMG, LNG_TYPE } from "../utils/constants";
import DisplaySearchedMovies from "./DisplaySearchedMovies";
import { useDispatch, useSelector } from "react-redux";
import { addLng } from "../utils/config";

export default function Search() {
  const dispatch = useDispatch();
  const search = useSelector((store) => store.search?.searchToggle);
  const movies = useSelector((store) => store.movie?.searchedMovies);
  function handleLngChange(e) {
    dispatch(addLng(e.target.value));
   
  }
  return (
    <div className="">
      <div className="fixed -z-10 ">
        <img className="w-screen h-screen object-cover md:w-screen sm:w-screen" src={BG_IMG}></img>
      </div>
      <div className="">
      
      <SearchBar />
      <DisplaySearchedMovies movies={movies}/>
      </div>
      
    </div>
  );
}

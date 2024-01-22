import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

export default function usePopularMovies() {
  const popularMovies = useSelector((store)=>store.movie?.popularMovies);
  const dispatch = useDispatch();
  async function getPopularMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
   
    dispatch(addPopular(json.results));
  }
  useEffect(function () {
    !popularMovies && getPopularMovies();
  }, []);
}

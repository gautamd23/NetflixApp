import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

export default function usePopularMovies() {
  const dispatch = useDispatch();
  async function getPopularMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopular(json.results));
  }
  useEffect(function () {
    getPopularMovies();
  }, []);
}

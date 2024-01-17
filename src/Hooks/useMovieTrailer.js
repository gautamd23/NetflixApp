import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

export default function useMovieTrailer(movieId) {
  const dispatch = useDispatch();
  async function getMovieTrailer() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results?.filter((movie) => {
      return movie.type === "Trailer";
    });
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
    console.log(filterData);
    console.log(trailer);
    // console.log(json);
  }
  useEffect(function () {
    getMovieTrailer();
  }, []);
}

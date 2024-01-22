import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function DisplaySearchedMovies({ movies }) {
  const searchedQuery = useSelector((store) => store.movie?.searchedQuery);
  if(!movies) return null
  return (
    <div className="mt-20 md:mt-6 bg-black ">
      <MovieList title={searchedQuery} movies={movies} />
    </div>
  );
}

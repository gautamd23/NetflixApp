import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function SecondContainer() {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movie?.popularMovies);
  const topRated = useSelector((store)=>store.movie?.topRated);
  const upcoming = useSelector((store)=>store.movie?.upcomingMovies)
  return (
    <div className="text-white bg-black absolute z-10">
      <div className="-mt-0 md:-mt-48 pt-2 md:pt-0 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Upcoming"} movies={upcoming} />
      </div>
    </div>
  );
}

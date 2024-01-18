import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <div className="pl-11 pr-5">
      <h1 className="font-bold text-xl py-3">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex flex-shrink-0 ">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}

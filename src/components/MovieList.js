import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showDetails } from "../utils/detailsToggle";
import { useRef } from "react";

export default function MovieList({ title, movies }) {
 
    const dispatch = useDispatch()
    const detailToggle = useSelector((store)=> store.details?.detailToggle)
    function handleDetails() {
        dispatch(showDetails())
    }
  return (
    <div className="pl-11 pr-5">
      <h1 className="font-bold text-xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex flex-shrink-0 ">
          {movies?.map((movie) => {
            return <Link to={"/movie/"+movie.id} key={movie.id} onClick={handleDetails}><MovieCard  posterPath={movie.poster_path} /></Link>;
          })}
        </div>
      </div>
    </div>
  );
}
//to={"/movie/"+movie.id}
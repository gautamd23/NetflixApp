import React, { useEffect } from "react";
import {
  API_OPTIONS,
  BG_IMG,
  LOGO_NET,
  LOGO_PROFILE,
  POSTER_IMG,
} from "../utils/constants";
import { toggleSearch } from "../utils/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addMovieDetails,  addSimilar } from "../utils/moviesSlice";
import MovieList from "./MovieList";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import VideoBackground from "./VideoBackground";
import { playToggleBtn } from "../utils/playToggle";
import { addMyList } from "../utils/listSlice";

export default function MovieDetails() {
    const playToggle = useSelector((store)=>store.play.playToggle)
  const search = useSelector((store) => store.search.searchToggle);
  const similarMovies = useSelector((store) => store.movie?.similarMovies);
  const media = useSelector((store) => store.movie?.searchedMovies);
  const movieDetail = useSelector((store) => store.movie?.movieDetails);
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  const { movieId } = useParams();
  useMovieTrailer( movieId);

  async function getMovieDetails() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieDetails(json));
    console.log(json);
  }

  async function getSimilarMovies() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSimilar(json.results));
    console.log(json.results);
  }

  useEffect(
    function () {
      getMovieDetails();
      getSimilarMovies();
      dispatch(playToggleBtn())
      
    },
    [movieId]
  );
  function handlePlay() {
    dispatch(playToggleBtn())
  }
  
  console.log(movieDetail?.poster_path);

  function handleAddMyList() {
    dispatch(addMyList(movieDetail))
  }
  return (
    <div className="bg-black text-white w-[100%]">
      <div className="flex items-center justify-between z-10 w-screen absolute px-8 py-1 bg-gradient-to-b from-black">
        <img className="w-[160px] " src={LOGO_NET}></img>
        <div className="flex items-center">
        <Link to="/my-list"><button>My List</button></Link>
          <Link to="/">
            <button
              className="text-white px-2 mr-2 font-bold"
              // onClick={handelSearchToggle}
            >
              Explore
            </button>
          </Link>
          {user && (
            <div className="flex items-center">
              <img className="mx-3 mr-4" src={LOGO_PROFILE}></img>
            </div>
          )}
        </div>
      </div>
      {playToggle ? <div className="w-[90%] flex gap-3 pt-24 px-12 justify-between ">
        <div className="flex flex-col mt-6 w-[600px] px-3 ">
          <h1 className="text-4xl  py-2">{movieDetail?.title}</h1>
          <p className="py-2 w-[70%] text-sm">{movieDetail?.overview}</p>
          <p className="text-sm">
            Duration -{Math.floor(movieDetail?.runtime / 60)}h{" "}
            {Math.floor(movieDetail?.runtime % 60)}m
          </p>
          <p className="text-sm">
            Genres -{" "}
            {movieDetail?.genres
              .map((g) => {
                return g.name;
              })
              .join(",")}
          </p>
          <div className="flex gap-3 mt-6">
            <button className="py-2 px-10 font-bold text-xl bg-white text-black rounded-lg hover:bg-gray-400" onClick={handlePlay}>
              Play
            </button>
            <button className="py-2 px-4 items-center rounded-full text-xl bg-gray-100 text-white  bg-opacity-20 hover:bg-opacity-15" onClick={handleAddMyList}>+</button>
          
          </div>
        </div>
        <img
          className="w-[30%]"
          src={POSTER_IMG + movieDetail?.poster_path}
        ></img>
      </div>
      :

     <VideoBackground/>}
      <MovieList title="More like this" movies={similarMovies} />
    </div>
  );
}

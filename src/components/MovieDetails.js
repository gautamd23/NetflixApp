import React, { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  API_OPTIONS,
  BG_IMG,
  LOGO_NET,
  LOGO_PROFILE,
  POSTER_IMG,
} from "../utils/constants";
import { toggleSearch } from "../utils/searchSlice";
import play from "../utils/play.png";
import like from "../utils/like.png";
import rating from "../utils/rating.png";
import watchList from "../utils/watchList.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addMovieDetails, addSimilar } from "../utils/moviesSlice";
import MovieList from "./MovieList";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import VideoBackground from "./VideoBackground";
import { playToggleBtn, resetToggle } from "../utils/playToggle";
import { addMyList } from "../utils/listSlice";
import { toggleAddListBtn } from "../utils/listToggleSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "reactjs-popup/dist/index.css";

export default function MovieDetails() {
  const listAddBtnToggle = useSelector(
    (store) => store.listToggle?.listAddBtnToggle
  );
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  const myList = useSelector((store) => store.list?.myList);
  const playToggle = useSelector((store) => store.play.playToggle);
  const search = useSelector((store) => store.search.searchToggle);
  const similarMovies = useSelector((store) => store.movie?.similarMovies);
  const media = useSelector((store) => store.movie?.searchedMovies);
  const movieDetail = useSelector((store) => store.movie?.movieDetails);
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  const { movieId } = useParams();
  useMovieTrailer(movieId);

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
      dispatch(resetToggle());
    },
    [movieId]
  );
  function handlePlay() {
    dispatch(playToggleBtn());
  }

  console.log(movieDetail?.poster_path);

  function handleAddMyList() {
    const listedMovie = myList?.filter((m) => {
      return m.id === Number(movieDetail.id);
    });
    console.log(listedMovie);
    if (listedMovie.length === 0) {
      toast(`${movieDetail.original_title} added to My List`);
      dispatch(addMyList(movieDetail));
    }
  }

  return (
    <div className="bg-black  text-white w-screen h-screen md:h-auto">
      <div className="flex items-center justify-between z-10 w-screen fixed md:absolute px-4 md:px-8 py-1 bg-gradient-to-b from-black ">
        <img className="w-[80px] md:w-[160px] " src={LOGO_NET}></img>
        <div className="flex items-center justify-between gap-1 ">
          <Link to="/my-list">
            <button className="font-bold text-xs md:text-lg">My List</button>
          </Link>
          <Link to="/">
            <button
              className="text-white px-2 mr-1 md:mr-2 font-bold text-xs md:text-lg"
              // onClick={handelSearchToggle}
            >
              Explore
            </button>
          </Link>
          <img
            className="w-5 md:w-8 mx-0 md:mx-3 mr-0 md:mr-4 sm:"
            src={LOGO_PROFILE}
          ></img>
          {/* {user && (
            <div className="flex items-center">
              <img className="mx-3 mr-4" src={LOGO_PROFILE}></img>
            </div>
          )} */}
        </div>
      </div>
      {!playToggle ? (
        <div className=" w-[90%] flex md:flex  md:flex-row gap-3 pt-7 md:pt-24 px-4 md:px-12 justify-center  mb-7 md:mb-0 ml-4 md:ml-0">
          <div className="flex flex-col mt-6 w-[300px] md:w-[600px] px-0 md:px-3 ">
            <h1 className="text-2xl md:text-4xl  py-2">{movieDetail?.title}</h1>
            <p className="py-2 w-full md:w-[70%] text-xs md:text-sm">
              {movieDetail?.overview.substring(0, 100) + "..."}
            </p>
            <p className="text-xs md:text-sm">
              Duration -{Math.floor(movieDetail?.runtime / 60)}h{" "}
              {Math.floor(movieDetail?.runtime % 60)}m
            </p>
            <p className="text-xs md:text-sm">
              Genres -{" "}
              {movieDetail?.genres
                ?.map((g) => {
                  return g.name;
                })
                .join(",")}
            </p>
            <div className="flex gap-2 md:gap-3  mt-11 md:mt-6 ">
              <button
                className=" flex  items-center py-0 md:py-2 px-2 md:px-8 font-bold text-xs md:text-lg bg-white text-black rounded-sm md:rounded-lg hover:bg-gray-400"
                onClick={handlePlay}
              >
                <img
                  className="hidden md:inline-block w-3 md:w-6 mr-1 md:mr-2"
                  src={play}
                ></img>
                Play
              </button>
              <ToastContainer 
              toastStyle={{ backgroundColor: "#888a89",color:"white",  }}
                position="top-center"
                autoClose={1000}
                draggable
                hideProgressBar={true}
                toastClassName="bg-gray-800 text-white"
              />

              <button
                className="py-2 text-sm px-2 items-centerhover:bg-opacity-15 "
                onClick={handleAddMyList}
              >
                <img
                  className="w-7 md:w-7 "
                  src={like}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Add to My List"
                ></img>
                <Tooltip
                  id="my-tooltip"
                  style={{
                    backgroundColor: "#ebe9e4",
                    color: "#000000",
                    font: "bold",
                    marginBottom: "50px",
                  }}
                />
              </button>

              <button className="px-2">
                <img
                  className="w-6 "
                  src={watchList}
                  data-tooltip-id="my-watchlist"
                  data-tooltip-content="Add to Watchlist"
                ></img>
                <Tooltip
                  id="my-watchlist"
                  style={{
                    backgroundColor: "#ebe9e4",
                    color: "#000000",
                    font: "bold",
                    marginBottom: "50px",
                  }}
                />
              </button>
              <button className="flex items-center gap-1 md:gap-2 text-xs md:text-lg px-1 md:px-2">
                <img className="w-3 md:w-7" src={rating}></img>
                {movieDetail?.vote_average?.toFixed(1)}/10
              </button>
              {/* <div>
                <button onClick={}>Notify!</button>
                <ToastContainer />
              </div> */}
            </div>
          </div>
          <div className="w-[70%] flex flex-row justify-end items-center md:items-start">
            <img
              className="w-[100%] md:w-[40%] h-48 md:h-auto"
              src={POSTER_IMG + movieDetail?.poster_path}
            ></img>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-7 pt-9 md:pt-0 pb-12 md:pb-0">
          <button className="pt-12 left-[82%] absolute z-10">❌</button>
          <iframe
            className="pt-12 w-[70%] aspect-video "
            src={
              "http://www.youtube.com/embed/" +
              trailerVideo?.key +
              "?&autoplay=1&mute=1&rel=0&amp;controls=0&modestbranding=1&showinfo=0"
            }
            allowtransparency="true"
          ></iframe>
        </div>
      )}
      <MovieList title="More like this" movies={similarMovies} />
    </div>
  );
}

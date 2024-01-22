import React from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

export default function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="flex">
      {/* <button className="left-[97%] absolute z-10">❌</button> */}
      <iframe
        className="w-screen aspect-video "
        src={
          "http://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        allowtransparency="true"
      ></iframe>
    </div>
  );
}

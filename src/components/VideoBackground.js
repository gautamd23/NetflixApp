import React from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";


export default function VideoBackground({ movieId }) {
    const trailerVideo = useSelector((store)=>store.movie?.trailerVideo)
    useMovieTrailer(movieId)
  return (
    <div>
      <iframe className="w-screen aspect-video "
        src={"http://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1"}
        allowfullscreen
        rel="0"
        modestbranding="1"
        allowtransparency="true"
        frameborder="0" 
        controls="0"
      ></iframe>
    </div>
  );
}

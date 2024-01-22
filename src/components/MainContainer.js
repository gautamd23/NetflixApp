import React from "react";

import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer() {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const movieBanner = useSelector((store)=> store.movie?.nowPlayingMovies)
//   if (!movies) return;
//   const { title, overview ,id} = movies[0];
if(!movieBanner) return;
const {title , overview, id} = movieBanner[0];
 
  return (
    <div >
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
}

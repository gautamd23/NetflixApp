import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";

export default function useTopRatedMovies() {
  const topRated = useSelector((store)=>store.movie?.topRated);
  const dispatch = useDispatch();
  async function getTopRatedMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
 
    dispatch(addTopRated(json.results));
  }

  useEffect(function () {
    !topRated && getTopRatedMovies();
  }, []);
}

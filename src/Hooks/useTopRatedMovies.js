import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";

export default function useTopRatedMovies() {
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
    getTopRatedMovies();
  }, []);
}

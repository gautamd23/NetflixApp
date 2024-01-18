import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/moviesSlice";

export default function useUpcomingMovies() {
  const dispatch = useDispatch();
  async function getUpcomingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcoming(json.results));
  }

  useEffect(function () {
    getUpcomingMovies();
  }, []);
}

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovie } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

export default function useNowPlayingMovies() {
    const dispatch = useDispatch();
    async function getNowPlayingMovies() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
    //   console.log(json.results);
      dispatch(addMovie(json.results));
    }
    useEffect(function () {
      getNowPlayingMovies();
    }, []);
}

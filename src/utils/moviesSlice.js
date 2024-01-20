import { createSlice } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRated: null,
    upcomingMovies: null,
    searchedMovies: null,
    searchedQuery: null,
    movieDetails: null,
    similarMovies:null
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    clearSearch: (state, action) => {
      if (state.searchedMovies) {
        state.searchedMovies = state.searchedMovies.length = 0;
      }
    },
    searchQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addSimilar:(state, action)=>{
        state.similarMovies =action.payload
    }
  },
});
export const {
  addMovie,
  addTrailer,
  addPopular,
  addTopRated,
  addUpcoming,
  addSearchedMovies,
  clearSearch,
  searchQuery,
  addMovieDetails,
  addSimilar
} = moviesSlice.actions;
export default moviesSlice.reducer;

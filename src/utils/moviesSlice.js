import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRated:null,
    upcomingMovies:null
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
    addTopRated:(state, action) => {
        state.topRated = action.payload
    },
    addUpcoming:(state, action)=>{
        state.upcomingMovies = action.payload
    }
  },
});
export const { addMovie, addTrailer, addPopular, addTopRated, addUpcoming} = moviesSlice.actions;
export default moviesSlice.reducer;

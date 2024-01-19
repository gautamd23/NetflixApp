import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import lngReducer from "./config";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
    lang: lngReducer,
  },
});

export default appStore;

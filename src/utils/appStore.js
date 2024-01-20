import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import lngReducer from "./config";
import detailsReducer from './detailsToggle'
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
    lang: lngReducer,
    details:detailsReducer
  },
});

export default appStore;

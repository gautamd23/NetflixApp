import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import lngReducer from "./config";
import detailsReducer from './detailsToggle';
import playReducer from './playToggle';
import listReducer from './listSlice'
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchReducer,
    lang: lngReducer,
    details:detailsReducer,
    play:playReducer,
    list:listReducer
  },
});

export default appStore;

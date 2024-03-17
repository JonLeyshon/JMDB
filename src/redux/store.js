import { configureStore } from "@reduxjs/toolkit";
import movieSearchReducer from "./movieSearchSlice";
import popularDataReducer from "./PopularDataSlice";
import topRatedReducer from "./topRatedSlice";
import individualMovieReducer from "./individualMovieSlice";

export const store = configureStore({
  reducer: {
    movieSearch: movieSearchReducer,
    popularData: popularDataReducer,
    topRated: topRatedReducer,
    individualMovie: individualMovieReducer,
  },
});

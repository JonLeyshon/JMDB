import { configureStore } from "@reduxjs/toolkit";
import movieSearchReducer from "./movieSearchSlice";
import popularDataReducer from "./PopularDataSlice";
import topRatedReducer from "./topRatedSlice";
import individualMovieReducer from "./individualMovieSlice";
import individualActorReducer from "./individualActorSlice";
import individualTVReducer from "./individualTVSlice";

export const store = configureStore({
  reducer: {
    movieSearch: movieSearchReducer,
    popularData: popularDataReducer,
    topRated: topRatedReducer,
    individualMovie: individualMovieReducer,
    individualTV: individualTVReducer,
    individualActor: individualActorReducer,
  },
});

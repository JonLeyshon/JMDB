import { configureStore } from "@reduxjs/toolkit";
import movieSearchReducer from "./movieSearchSlice";
import popularDataReducer from "./PopularDataSlice";
import topRatedReducer from "./topRatedSlice";
// import individualMovieReducer from "./individualMovieSlice";
import individualActorReducer from "./individualActorSlice";
import individualTVReducer from "./individualTVSlice";
import individualMediaReducer from "./individualMediaSlice";
import BannerSliceReducer from "./BannerSlice";
import LoggedInOrOutReducer from "./LoggedInOrOut";
// import FeaturedMovieReducer from "./FeaturedMovieSlice";

export const store = configureStore({
  reducer: {
    movieSearch: movieSearchReducer,
    popularData: popularDataReducer,
    topRated: topRatedReducer,
    // individualMovie: individualMovieReducer,
    individualTV: individualTVReducer,
    individualActor: individualActorReducer,
    individualMedia: individualMediaReducer,
    banner: BannerSliceReducer,
    // FeaturedMovie: FeaturedMovieReducer,
    LoggedIn: LoggedInOrOutReducer,
  },
});

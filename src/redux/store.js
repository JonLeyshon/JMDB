import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import movieSearchReducer from "./movieSearchSlice";
import popularDataReducer from "./PopularDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movieSearch: movieSearchReducer,
    popularData: popularDataReducer,
  },
});

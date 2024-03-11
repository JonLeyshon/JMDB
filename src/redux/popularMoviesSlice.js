import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
import { GET_POPULAR_MOVIES } from "./types";

export const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {
    GET_POPULAR: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { GET_POPULAR_MOVIES } = counterSlice.actions;

export const select = (state) => state.counter.value;

export default counterSlice.reducer;

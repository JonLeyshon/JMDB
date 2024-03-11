import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieSearchData: [],
};

export const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
    setMovieSearchData: (state, { payload }) => {
      state.movieSearchData = payload;
    },
  },
});

export const { setMovieSearchData } = movieSearchSlice.actions;

export const selectMovieSearchData = (state) =>
  state.movieSearch.movieSearchData;

export default movieSearchSlice.reducer;

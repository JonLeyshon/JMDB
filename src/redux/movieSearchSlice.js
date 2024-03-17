import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieSearchData: [],
  resultType: "movie",
};

export const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
    setMovieSearchData: (state, { payload }) => {
      state.movieSearchData = payload.results;
    },
    setResultType: (state, { payload }) => {
      state.resultType = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const { setMovieSearchData, setResultType, setSearchTerm } =
  movieSearchSlice.actions;

export const selectMovieSearchData = (state) =>
  state.movieSearch.movieSearchData;

export const selectResultType = (state) => state.movieSearch.resultType;

export const selectSearchTerm = (state) => state.movieSearch.searchTerm;

export default movieSearchSlice.reducer;

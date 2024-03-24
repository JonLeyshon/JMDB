import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // individualMovieData: [],
  // individualMovieCast: [],
};

export const individualMovieSlice = createSlice({
  name: "individualMovie",
  initialState,
  reducers: {
    setIndividualMovieData: (state, { payload }) => {
      state.individualMovieData = payload;
    },
    setIndividualMovieCast: (state, { payload }) => {
      state.individualMovieCast = payload;
    },
  },
});

export const { setIndividualMovieData, setIndividualMovieCast } =
  individualMovieSlice.actions;

export const selectIndividualMovieData = (state) =>
  state.individualMovie.individualMovieData;

export const selectIndividualMovieCast = (state) =>
  state.individualMovie.individualMovieCast;

export default individualMovieSlice.reducer;

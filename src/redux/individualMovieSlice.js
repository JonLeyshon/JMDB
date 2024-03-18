import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  individualMovieData: [],
};

export const individualMovieSlice = createSlice({
  name: "individualMovie",
  initialState,
  reducers: {
    setIndividualMovieData: (state, { payload }) => {
      state.individualMovieData = payload;
    },
  },
});

export const { setIndividualMovieData } = individualMovieSlice.actions;

export const selectIndividualMovieData = (state) =>
  state.individualMovie.individualMovieData;

export default individualMovieSlice.reducer;

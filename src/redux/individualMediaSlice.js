import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // individualMovieData: [],
  // individualMovieCast: [],
};

export const individualMediaSlice = createSlice({
  name: "individualMedia",
  initialState,
  reducers: {
    setIndividualMediaData: (state, { payload }) => {
      state.individualMediaData = payload;
    },
    setIndividualMediaCast: (state, { payload }) => {
      state.individualMediaCast = payload;
    },
    setIndividualMediaReviews: (state, { payload }) => {
      state.individualMediaReviews = payload.results;
    },
  },
});

export const {
  setIndividualMediaData,
  setIndividualMediaCast,
  setIndividualMediaReviews,
} = individualMediaSlice.actions;

export const selectIndividualMediaData = (state) =>
  state.individualMedia.individualMediaData;

export const selectIndividualMediaCast = (state) =>
  state.individualMedia.individualMediaCast;

export const selectIndividualMediaReviews = (state) =>
  state.individualMedia.individualMediaReviews;

export default individualMediaSlice.reducer;

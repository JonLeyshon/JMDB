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
    setIndividualMediaVideos: (state, { payload }) => {
      state.individualMediaVideos = payload.results;
    },
  },
});

export const {
  setIndividualMediaData,
  setIndividualMediaCast,
  setIndividualMediaReviews,
  setIndividualMediaVideos,
} = individualMediaSlice.actions;

export const selectIndividualMediaData = (state) =>
  state.individualMedia.individualMediaData;

export const selectIndividualMediaCast = (state) =>
  state.individualMedia.individualMediaCast;

export const selectIndividualMediaReviews = (state) =>
  state.individualMedia.individualMediaReviews;

export const selectIndividualMediaVideos = (state) =>
  state.individualMedia.individualMediaVideos;

export default individualMediaSlice.reducer;

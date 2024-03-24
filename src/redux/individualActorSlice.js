import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // individualMovieData: [],
  // individualMovieCast: [],
};

export const individualActorSlice = createSlice({
  name: "individualActor",
  initialState,
  reducers: {
    setIndividualActorData: (state, { payload }) => {
      state.individualActorData = payload;
    },
    setActorMovies: (state, { payload }) => {
      state.creditsMovieData = payload.cast;
    },
    setActorTv: (state, { payload }) => {
      state.creditsTvData = payload.cast;
    },
  },
});

export const { setIndividualActorData, setActorMovies, setActorTv } =
  individualActorSlice.actions;

export const selectIndividualActorData = (state) =>
  state.individualActor.individualActorData;

export const selectActorMovieCredits = (state) =>
  state.individualActor.creditsMovieData;

export const selectActorTVCredits = (state) =>
  state.individualActor.creditsTvData;

export default individualActorSlice.reducer;

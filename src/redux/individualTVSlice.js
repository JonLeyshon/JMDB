import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // individualMovieData: [],
  // individualMovieCast: [],
};

export const individualTVSlice = createSlice({
  name: "individualTV",
  initialState,
  reducers: {
    setIndividualTVData: (state, { payload }) => {
      state.individualTVData = payload;
    },
    setIndividualTVCast: (state, { payload }) => {
      state.individualTVCast = payload.cast;
    },
  },
});

export const { setIndividualTVData, setIndividualTVCast } =
  individualTVSlice.actions;

export const selectIndividualTVData = (state) =>
  state.individualTV.individualTVData;

export const selectIndividualTVCast = (state) =>
  state.individualTV.individualTVCast;

export default individualTVSlice.reducer;

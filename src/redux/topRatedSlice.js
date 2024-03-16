import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topRatedData: [],
  currentSelection: "movie",
};

export const topRatedSlice = createSlice({
  name: "topRated",
  initialState,
  reducers: {
    setTopRatedData: (state, { payload }) => {
      state.topRatedData = payload.results;
    },
    setCurrentSelectionTR: (state, { payload }) => {
      state.currentSelection = payload;
    },
  },
});

export const { setTopRatedData, setCurrentSelectionTR } = topRatedSlice.actions;

export const selectTopRatedData = (state) => state.topRated.topRatedData;
export const selectcurrentSelectionTR = (state) =>
  state.topRated.currentSelection;

export default topRatedSlice.reducer;

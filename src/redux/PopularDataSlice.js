import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PopularData: [],
  currentSelection: "movie",
};

export const popularDataSlice = createSlice({
  name: "popularData",
  initialState,
  reducers: {
    setPopularData: (state, { payload }) => {
      state.PopularData = payload.results;
    },
    setCurrentSelectionPopular: (state, { payload }) => {
      state.currentSelection = payload;
    },
  },
});

export const { setPopularData, setCurrentSelectionPopular } =
  popularDataSlice.actions;

export const selectPopularData = (state) => state.popularData.PopularData;
export const selectCurrentSelectionPoular = (state) =>
  state.popularData.currentSelection;

export default popularDataSlice.reducer;

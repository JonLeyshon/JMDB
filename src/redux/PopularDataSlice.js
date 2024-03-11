import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PopularData: [],
};

export const popularDataSlice = createSlice({
  name: "popularData",
  initialState,
  reducers: {
    setPopularData: (state, { payload }) => {
      state.PopularData = payload.results;
    },
  },
});

export const { setPopularData } = popularDataSlice.actions;

export const selectPopularData = (state) => state.popularData;

export default popularDataSlice.reducer;

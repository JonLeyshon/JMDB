import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
};

export const BannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBanner: (state, { payload }) => {
      state.bannerData = payload;
    },
  },
});

export const { setBanner } = BannerSlice.actions;

export const selectBanner = (state) => state.banner.bannerData;

export default BannerSlice.reducer;

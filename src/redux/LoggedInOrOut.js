import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const LoggedInOrOutSlice = createSlice({
  name: "LoggedIn",
  initialState,
  reducers: {
    setLoggedIn: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const { setLoggedIn } = LoggedInOrOutSlice.actions;

export const selectLoggedIn = (state) => state.LoggedIn.status;

export default LoggedInOrOutSlice.reducer;

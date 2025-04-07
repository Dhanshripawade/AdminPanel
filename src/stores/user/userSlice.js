import { createSlice } from "@reduxjs/toolkit";
import { getusers } from "./userThunk";

const initialState = {
  users: [],
  status: "loading", 
  error: null,
  filter: {}, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getusers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getusers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getusers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export const { setFilter } = userSlice.actions;
export default userSlice.reducer;

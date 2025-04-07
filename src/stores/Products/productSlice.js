import { createSlice } from "@reduxjs/toolkit";
import { getproducts } from "./productThunk";

const initialState = {
  products: [],
  status: "loading", 
  error: null,
  filter: {}, 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getproducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export const { setFilter } = productSlice.actions;
export default productSlice.reducer;

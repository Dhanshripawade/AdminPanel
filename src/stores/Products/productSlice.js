import { createSlice } from "@reduxjs/toolkit";
import { getproducts, postproducts } from "./productThunk";

const initialState = {
  products: [],
  status: "loading", 
  error: null,
  filter: {}, 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  //get
  extraReducers : (builder) => {
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
      })
//post
 .addCase(postproducts.pending, (state) => {
         state.status = "loading";
         state.error = null;
       })
       .addCase(postproducts.fulfilled, (state, action) => {
       state.status = "succeeded";
         state.products.unshift(action.payload);
       })
      .addCase(postproducts.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message; 
    state.products = []; 

      })



  },
});



export default productSlice.reducer;

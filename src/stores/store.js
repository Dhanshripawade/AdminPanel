import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/productSlice";
import useReducer  from "./user/userSlice";
import blogReducer from "./blog/blogSlice"


const store = configureStore({
  reducer: {
    product: productReducer,
    user : useReducer,
    blog: blogReducer, 
  },
});

export default store;

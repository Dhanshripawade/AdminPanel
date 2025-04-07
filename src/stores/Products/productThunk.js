import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getproducts = createAsyncThunk("products/fetch", async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products; 
    } catch (e) {
      throw new Error(e.response || "Fetching error");
    }
  });
  
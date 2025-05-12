import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


//get method
export const getproducts = createAsyncThunk("products/fetch", async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products; 
    } catch (e) {
      throw new Error(e.response || "Fetching error");
    }
  });
  

  //post method
  export const postproducts = createAsyncThunk(
    "produts/create",
    async (fromData,{ rejectWithValue }) => {
      try {
        const response = await axios.post('https://dummyjson.com/products/add', fromData); 
       return response.data;
          
        }
        catch (error) 
        {
        return rejectWithValue(error.response?.data || "Post failed");
      }
    }
  );
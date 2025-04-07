import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getposts = createAsyncThunk("posts/fetch", async () => {
    try {
        const response = await axios.get("https://dummyjson.com/posts");
        return response.data.posts;
    } catch (e) {
        throw new Error(e.response?.data?.message || "Fetching error");
    }
});


 

// blogpost Thunk
export const postposts = createAsyncThunk(
    "posts/create",
    async (newpost,{ rejectWithValue }) => {
      try {
        const response = await axios.post("https://dummyjson.com/posts/add", newpost); 
          return response.data;
        }
        
       catch (error) {
        return rejectWithValue(error.response?.data || "Post failed");
      }
    }
  );

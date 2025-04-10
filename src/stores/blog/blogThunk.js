import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get
export const getposts = createAsyncThunk("posts/fetch", async () => {
    try {
        const response = await axios.get("https://dummyjson.com/posts");
        return response.data.posts;
    }   catch (e) {
        throw new Error(e.response?.data?.message || "Fetching error");
    }
});


 // blogpost Thunk
export const postposts = createAsyncThunk(
    "posts/create",
    async (fromData,{ rejectWithValue }) => {
      try {
        const response = await axios.post('https://dummyjson.com/posts/add', fromData); 
       return response.data;
          
        }
        catch (error) 
        {
        return rejectWithValue(error.response?.data || "Post failed");
      }
    }
  );

  //delete method
  export const deleteposts = createAsyncThunk(
    'posts/deleteposts',
    async (id, { rejectWithValue }) => {
      try {
        console.log("Deleating card with ID: " , id);
        
        const response = await axios.delete(`https://dummyjson.com/posts/${id}`);
        return id;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );


  //update method
  export const updateposts = createAsyncThunk(
    'posts/updatePost',
    async ({ id, updatedData }, thunkAPI) => {
      try {
        const response = await axios.put(`https://dummyjson.com/posts/${id}`, updatedData);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
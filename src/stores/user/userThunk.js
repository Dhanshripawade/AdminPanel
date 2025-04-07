import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getusers = createAsyncThunk("users/fetch", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users;
  } catch (e) {
    throw new Error(e.response?.data?.message || "Fetching error");
  }
});

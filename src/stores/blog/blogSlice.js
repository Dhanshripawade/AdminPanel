import { createSlice } from "@reduxjs/toolkit";
import { getposts, postposts , deleteposts , updateposts} from "./blogThunk";

const initialState = {
  posts: [],
  status: "idle", 
  error: null,
 
};

const blogSlice = createSlice({
  name: "blog", 
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getposts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getposts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(getposts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.posts = []; 
      })

  //post method
       .addCase(postposts.pending, (state) => {
         state.status = "loading";
         state.error = null;
       })
       .addCase(postposts.fulfilled, (state, action) => {
       state.status = "succeeded";
         state.posts.unshift(action.payload);
       })
      .addCase(postposts.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message; 
    state.posts = []; 

      })

  //delete method
  .addCase(deleteposts.pending, (state) => {
    state.status = "loading";
    state.error = null;
  })
  .addCase(deleteposts.fulfilled, (state, action) => {
    state.status = "succeeded";
    state.posts = state.posts.filter(post => post.id !== action.payload);
  })
  .addCase(deleteposts.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message;
  })

//update method
.addCase(updateposts.pending, (state) => {
  state.status = "loading";
  state.error = null;
})
.addCase(updateposts.fulfilled, (state, action) => {
  state.status = "succeeded";
  const index = state.posts.findIndex(post => post.id === action.payload.id);
  if (index !== -1) {
    state.posts[index] = action.payload; 
  }
})
.addCase(updateposts.rejected, (state, action) => {
  state.status = "failed";
  state.error = action.error.message;
})

  },
});
export default blogSlice.reducer;

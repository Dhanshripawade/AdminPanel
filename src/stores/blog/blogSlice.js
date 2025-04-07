import { createSlice } from "@reduxjs/toolkit";
import { getposts, postposts } from "./blogThunk";

const initialState = {
  posts: [],
  status: "idle", 
  error: null,
  // filter: {}, 
};

const blogSlice = createSlice({
  name: "blog", 
  initialState,
  reducers: {
    // setFilter: (state, action) => {
    //   Object.assign(state.filter, action.payload);
    // },
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
  .addCase(postposts.fulfilled,(state,action) => {
    state.posts.unshift(action.payload);
  });


      // .addCase(postposts.pending, (state) => {
      //   state.status = "loading";
      //   state.error = null;
      // })
      // .addCase(postposts.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.posts.unshift(action.payload);
      // })
      // .addCase(postposts.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.payload;
      //   // state.posts = []; 
      // });

      
  },
});

// export const { setFilter } = blogSlice.actions;
export default blogSlice.reducer;

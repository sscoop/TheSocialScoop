import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    postsList: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    postStart: (state) => {
      state.isFetching = true;
    },
    createPostSuccess: (state, action) => {
      state.postsList.push(action.payload);
      // const compare = (a, b) => {
      //   if (a.updatedAt < b.updatedAt) {
      //     return -1;
      //   }
      //   if (a.updatedAt > b.updatedAt) {
      //     return 1;
      //   }
      //   return 0;
      // };

      // state.postsList.newPostData.sort(compare);
      state.isFetching = false;
    },
    getPostSuccess: (state, action) => {
      state.postsList = [...action.payload];
      state.isFetching = false;
    },
    postFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { createPostSuccess, getPostSuccess, postFailure, postStart } =
  postSlice.actions;
export default postSlice.reducer;

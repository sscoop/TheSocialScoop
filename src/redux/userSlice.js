import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
    getFriendsSuccess: (state) => {
      state.isFetching = false;
    },
    followingStart: (state) => {
      state.isFetching = true;
    },
    followSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.following.push(action.payload);
    },
    unFollowSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.following = state.currentUser.following.filter(
        (user) => user !== action.payload
      );
    },
    followingFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginFailure,
  loginSuccess,
  logOut,
  followingFailure,
  followingStart,
  followSuccess,
  unFollowSuccess,
  getFriendsSuccess,
} = userSlice.actions;
export default userSlice.reducer;

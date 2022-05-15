import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    userStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },

    logOut: (state) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = null;
    },
    changeThemeSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser.prefersDarkTheme = action.payload;
    },
    getFriendsSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    followingStart: (state) => {
      state.isFetching = true;
    },
    followSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser.following.push(action.payload);
    },
    unFollowSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser.following = state.currentUser.following.filter(
        (user) => user !== action.payload
      );
    },
    userFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginSuccess,
  logOut,
  userFailure,
  followingStart,
  followSuccess,
  unFollowSuccess,
  getFriendsSuccess,
  changeThemeSuccess,
  userStart,
} = userSlice.actions;
export default userSlice.reducer;

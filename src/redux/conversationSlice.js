import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    conversations: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    convoStart: (state) => {
      state.isFetching = true;
    },
    convoFetchSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.conversations = action.payload;
    },

    convoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { convoStart, convoFetchSuccess, convoFailure } =
  userSlice.actions;
export default userSlice.reducer;

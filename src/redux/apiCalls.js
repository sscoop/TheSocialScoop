import { publicRequest } from "../requestMethods";
import {
  createPostSuccess,
  getPostSuccess,
  postFailure,
  postStart,
} from "./postSlice";
import {
  followingFailure,
  followingStart,
  followSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  unFollowSuccess,
} from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const follow = async (dispatch, id, userId) => {
  dispatch(followingStart());
  try {
    await publicRequest.put(`users/follow/${id}`, { userId });
    dispatch(followSuccess(id));
  } catch (error) {
    dispatch(followingFailure());
  }
};
export const unfollow = async (dispatch, id, userId) => {
  dispatch(followingStart());
  try {
    await publicRequest.put(`users/unfollow/${id}`, { userId });
    dispatch(unFollowSuccess(id));
  } catch (error) {
    dispatch(followingFailure());
  }
};

export const createPosts = async (dispatch, postData) => {
  try {
    const res = await publicRequest.post("/posts/create-post", { ...postData });
    dispatch(createPostSuccess(res.data));
  } catch (error) {
    dispatch(postFailure());
  }
};
export const getPosts = async (dispatch, userId) => {
  dispatch(postStart());
  try {
    const { data } = await publicRequest.get(`/posts/${userId}`);
    dispatch(getPostSuccess(data));
  } catch (error) {
    dispatch(postFailure());
  }
};

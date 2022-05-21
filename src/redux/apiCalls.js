import { publicRequest } from "../requestMethods";
import {
  createPostSuccess,
  getPostSuccess,
  postDeleteSuccess,
  postFailure,
  postReactSuccess,
  postStart,
} from "./postSlice";
import {
  userFailure,
  followingStart,
  sendFollowRequestSuccess,
  getUsersSuccess,
  userStart,
  loginSuccess,
  unFollowSuccess,
  changeThemeSuccess,
  unSendFollowRequestSuccess,
  approveFollowRequestSuccess,
  rejectFollowRequestSuccess,
} from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(userFailure());
  }
};

export const changeTheme = async (dispatch, userId, prefersDarkTheme) => {
  dispatch(userStart());
  try {
    await publicRequest.put(`/users/theme/${userId}`, { prefersDarkTheme });
    dispatch(changeThemeSuccess(prefersDarkTheme));
  } catch (error) {
    dispatch(userFailure());
  }
};

export const getUsers = async (dispatch, userList) => {
  dispatch(followingStart());
  try {
    const res = await publicRequest.post("users/users-details", {
      data: userList,
    });
    dispatch(getUsersSuccess());
    return res.data;
  } catch (error) {
    dispatch(userFailure());
    return error.message;
  }
};

export const follow = async ({ dispatch, id, userId }) => {
  dispatch(followingStart());
  try {
    await publicRequest.put(`users/follow-request/${id}`, { userId });
    dispatch(sendFollowRequestSuccess(id));
  } catch (error) {
    dispatch(userFailure());
  }
};
export const unsendFollowReq = async ({ dispatch, id, userId }) => {
  dispatch(followingStart());
  try {
    await publicRequest.put(`users/unsend-follow-request/${id}`, { userId });
    dispatch(unSendFollowRequestSuccess(id));
  } catch (error) {
    dispatch(userFailure());
  }
};
export const approveFollowRequest = async ({ dispatch, id, userId }) => {
  dispatch(followingStart());
  try {
    await publicRequest.put(`users/approve-follow-request/${id}`, { userId });
    dispatch(approveFollowRequestSuccess(id));
  } catch (error) {
    dispatch(userFailure());
  }
};
export const rejectFollowRequest = async ({ dispatch, id, userId }) => {
  dispatch(followingStart());
  try {
    await publicRequest.put(`users/reject-follow-request/${id}`, { userId });
    dispatch(rejectFollowRequestSuccess(id));
  } catch (error) {
    dispatch(userFailure());
  }
};

export const unfollow = async ({ dispatch, id, userId }) => {
  dispatch(followingStart());
  try {
    await publicRequest.put(`users/unfollow/${id}`, { userId });
    dispatch(unFollowSuccess(id));
  } catch (error) {
    dispatch(userFailure());
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
    console.log(data);
    dispatch(getPostSuccess(data));
  } catch (error) {
    dispatch(postFailure());
  }
};

export const postReaction = async (dispatch, post, userId) => {
  try {
    await publicRequest.put(`/posts/reactions/${post._id}`, {
      userId,
    });

    if (!post.likes.includes(userId)) {
      const newPost = { ...post, likes: [...post.likes, userId] };
      dispatch(postReactSuccess({ newPost, userId }));
    } else {
      const newLikes = [...post.likes];
      newLikes.splice(newLikes.indexOf(userId), 1);
      const newPost = { ...post, likes: newLikes };
      dispatch(postReactSuccess({ newPost, userId }));
    }
  } catch (error) {
    dispatch(postFailure());
  }
};

export const deletePost = async (dispatch, postId, userId) => {
  dispatch(postStart());
  try {
    await publicRequest.delete(`/posts/delete-post/${postId}`, {
      data: {
        userId,
      },
    });
    dispatch(postDeleteSuccess(postId));
  } catch (error) {
    dispatch(postFailure());
    console.log(error.message);
  }
};

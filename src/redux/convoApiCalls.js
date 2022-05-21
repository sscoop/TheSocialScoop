import { publicRequest } from "../requestMethods";
import {
  convoFailure,
  convoFetchSuccess,
  convoStart,
} from "./conversationSlice";

export const getConversations = async (dispatch, userId) => {
  dispatch(convoStart());
  try {
    const res = await publicRequest.get(`conversations/${userId}`);
    dispatch(convoFetchSuccess(res.data));
  } catch (error) {
    dispatch(convoFailure());
  }
};

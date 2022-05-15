import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
const Comments = styled.div`
  width: 100%;
  max-height: 50%;
  position: relative;
  overflow-y: hidden;
  .commentList {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
const CommentList = () => {
  return (
    <Comments>
      <h4>Comments</h4>
      <div className="commentList">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </Comments>
  );
};

export default CommentList;

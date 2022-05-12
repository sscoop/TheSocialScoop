import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.85)`
      : `rgba(${props.theme.bodyRgba},.6)`};
  border-radius: 30px;
  margin-top: 30px;
  padding: 20px 30px;
  width: 50%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Post = ({ themeCurrent }) => {
  return <PostContainer themeCurrent={themeCurrent}>Post</PostContainer>;
};

export default Post;

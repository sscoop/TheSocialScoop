import { faEllipsisV, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

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
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
const Media = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 30px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    top: 0;
    right: -15px;
    background-color: ${(props) => `rgba(${props.theme.mainRgba},.3)`};
  }
  img {
    height: 100%;
    width: 100%;
    background-color: ${(props) => `rgba(${props.theme.mainRgba},.1)`};
    border-radius: 15px;
    object-fit: contain;
  }
`;
const SideContainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Section = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const TopSection = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .left {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 50%;
    }
    h3 {
      margin-left: 10px;
    }
    p {
      margin-left: 10px;
      font-weight: 100;
    }
  }
`;
const Caption = styled.div`
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},.3)`};
  box-sizing: border-box;
  border-radius: 15px;
  box-sizing: border-box;
  p {
    max-width: calc(100% - 60px);
    height: calc(100% - 30px);
    margin: 15px 30px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-align: justify;
  }
`;
const Likes = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  height: 30px;
  p {
    margin-left: 10px;
  }
`;
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

const Post = ({ themeCurrent, post }) => {
  return (
    <PostContainer themeCurrent={themeCurrent}>
      <Media>
        <img src={post.postMedia} alt="" />
      </Media>
      <SideContainer>
        <Section>
          <TopSection>
            <div className="left">
              <img src={post.profilePicture} alt="" />
              <h3>{post.username}</h3> <p>{post.name}</p>
            </div>
            <FontAwesomeIcon icon={faEllipsisV} />
          </TopSection>
          <Caption>
            <p>{post.description}</p>
          </Caption>
        </Section>
        <Likes>
          <FontAwesomeIcon icon={faHeart} />
          <p>{post.likes.length}</p>
        </Likes>
        <Comments>
          <h4>Comments</h4>
          <div className="commentList">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </Comments>
      </SideContainer>
    </PostContainer>
  );
};

export default Post;

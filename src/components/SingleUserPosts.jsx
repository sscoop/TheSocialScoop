import {
  faEllipsisV,
  faExclamationTriangle,
  faHeart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, postReaction } from "../redux/apiCalls";

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
  padding: 30px 40px;
  width: 100%;
  height: max-content;
  height: ${(props) => (props.showMedia ? "500px" : "max-content")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: max-content;
    padding: 30px 30px 20px;
  }
  @media (max-width: 550px) {
    padding: 20px 30px;
  }
`;
const Media = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 60px;
  position: relative;
  display: ${(props) => (props.showMedia ? "block" : "none")};
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    top: 0;
    right: -30px;
    background-color: ${(props) => `rgba(${props.theme.mainRgba},.3)`};
    @media (max-width: 1000px) {
      top: auto;
      right: auto;
      left: 0;
      bottom: -15px;
      width: 100%;
      height: 1px;
    }
  }
  img {
    height: 100%;
    width: 100%;
    background-color: ${(props) => `rgba(${props.theme.mainRgba},.1)`};
    border-radius: 15px;
    object-fit: contain;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
    margin-right: 0px;
    margin-bottom: 40px;
  }
`;
const SideContainer = styled.div`
  width: ${(props) => (props.showMedia ? "50%" : "100%")};
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 100%;
    height: ${(props) => (props.showMedia ? "50%" : "100%")};
  }
`;
const TopSection = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  .options {
    position: absolute;
    width: auto;
    top: 0;
    right: 5px;
    z-index: 10;
    list-style: none;
    padding: 10px 20px;
    font-size: 12px;
    border-radius: 5px;
    background: ${(props) => props.theme.body};
    display: ${(props) => (props.showOptions ? "block" : "none")};

    li {
      cursor: pointer;
    }
    .optionsIcon {
      margin-right: 10px;
      height: 12px;
    }
  }
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
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},.1)`};
  box-sizing: border-box;
  border-radius: 15px;
  box-sizing: border-box;
  margin-bottom: auto;
  p {
    max-width: calc(100% - 60px);
    height: calc(100% - 30px);
    margin: 15px 30px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-align: justify;
  }
`;
const BottomSection = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 0;
  margin-top: 30px;
`;
const Likes = styled.div`
  width: max-content;
  color: ${(props) =>
    props.likedByUser ? props.theme.accent : props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 40px;
  .likesIcon {
    height: 20px;
  }
  p {
    margin: 0;
    font-size: 12px;
    margin-top: 5px;
  }
`;

const Post = ({ themeCurrent, userPost }) => {
  const [post, setpost] = useState(userPost);
  const [showOptions, setShowOptions] = useState(false);
  const showMedia = post.postMedia === "null" ? false : true;
  const dispatch = useDispatch();
  const { _id: userId } = useSelector((state) => state.user.currentUser);
  const likedByUser = post.likes.includes(userId);
  const reaction = async () => {
    try {
      postReaction(dispatch, post, userId);

      if (!post.likes.includes(userId)) {
        const newPost = { ...post, likes: [...post.likes, userId] };
        setpost(newPost);
      } else {
        const newLikes = [...post.likes];
        newLikes.splice(newLikes.indexOf(userId), 1);
        const newPost = { ...post, likes: newLikes };
        setpost(newPost);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const optionRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionRef]);

  return (
    <PostContainer themeCurrent={themeCurrent} showMedia={showMedia}>
      <Media showMedia={showMedia}>
        <img src={post.postMedia} alt="" />
      </Media>
      <SideContainer showMedia={showMedia}>
        <TopSection showOptions={showOptions}>
          <div className="left">
            <img src={post.profilePicture} alt="" />
            <h3>{post.username}</h3> <p>{post.name}</p>
          </div>
          <FontAwesomeIcon
            style={{ cursor: "pointer", padding: "0 10px" }}
            icon={faEllipsisV}
            onClick={() => setShowOptions((p) => !p)}
          />
          <ul className="options" ref={optionRef}>
            <li
              onClick={() => deletePost(dispatch, post._id, userId)}
              style={{
                display: `${post.userId === userId ? "inlineBlock" : "none"}`,
              }}
            >
              <FontAwesomeIcon icon={faTrash} className="optionsIcon" />
              Delete
            </li>
            <li
              style={{
                display: `${post.userId !== userId ? "inlineBlock" : "none"}`,
              }}
            >
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="optionsIcon"
              />
              Unfollow
            </li>
          </ul>
        </TopSection>
        <Caption>
          <p>{post.description}</p>
        </Caption>
        <BottomSection>
          <Likes onClick={reaction} likedByUser={likedByUser}>
            <FontAwesomeIcon className="likesIcon" icon={faHeart} />
            <p>{`${post.likes.length} Likes`}</p>
          </Likes>
        </BottomSection>
      </SideContainer>
    </PostContainer>
  );
};

export default Post;

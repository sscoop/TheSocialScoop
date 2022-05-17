import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
const Comments = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .commentHeader {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .backIcon {
    height: 20px;
    cursor: pointer;
  }

  .commentList {
    width: 100%;
    height: calc(100% - 30px - 50px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 100%;
      padding: 10px 30px;
      background-color: ${(props) => `rgba(${props.theme.mainRgba},.05)`};
      border: none;
      border-radius: 30px;
      outline: none;
      margin-right: 10px;
      color: ${(props) => props.theme.main};
      font-size: 15px;
      &::placeholder {
        color: ${(props) => `rgba(${props.theme.mainRgba},.3)`};
      }
    }
    button {
      width: 100px;
      padding: 10px 30px;
      font-size: 15px;
      font-weight: 600;
      border: none;
      outline: none;
      border-radius: 30px;
      background-color: ${(props) => props.theme.accent};
      color: ${(props) => props.theme.body};
      box-sizing: border-box;
      transition: all 0.2s ease;

      &:hover {
        color: ${(props) => props.theme.accent};
        background-color: ${(props) => props.theme.body};
      }
      @media (max-width: 1000px) {
        font-size: 12px;
        padding: 12px 30px;
      }
    }
  }
`;
const CommentList = ({ setShowComments }) => {
  return (
    <Comments>
      <div className="commentHeader">
        <h4>Comments</h4>
        <FontAwesomeIcon
          className="backIcon"
          icon={faCircleChevronLeft}
          onClick={() => setShowComments(false)}
        />
      </div>
      <div className="commentList">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <form>
        <input
          type="text"
          name="makeComment"
          id="makeComment"
          placeholder="Your Comment..."
        />
        <button type="submit">Post</button>
      </form>
    </Comments>
  );
};

export default CommentList;

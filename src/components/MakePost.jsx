import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MakePostContainer = styled.form`
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.85)`
      : `rgba(${props.theme.bodyRgba},.6)`};
  border-radius: 30px;
  padding: 20px 30px;
  margin-bottom: 10px;
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  span {
    background-color: ${(props) => props.theme.main};
    height: 1px;
    width: 95%;
    margin: 12px 0;
  }
  @media (max-width: 1000px) {
    padding: 20px 30px;
    height: 175px;
  }
`;
const TopContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-right: 20px;
  }
  input {
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${(props) => props.theme.main};
    font-size: 15px;
    &::placeholder {
      color: ${(props) => props.theme.text};
    }
  }
`;
const BottomContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    display: none;
  }
  label {
  }
  button {
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
`;

const MakePost = ({ themeCurrent }) => {
  const { profilePicture, name } = useSelector(
    (state) => state.user.currentUser
  );
  return (
    <MakePostContainer themeCurrent={themeCurrent}>
      <TopContainer>
        <img src={profilePicture} alt="" />
        <input
          type="text"
          placeholder={`What's on your mind ${name.toUpperCase()}?`}
        />
      </TopContainer>
      <span />
      <BottomContainer className="bottomContainer">
        <input type="file" name="media" id="media" />
        <label htmlFor="media">
          <FontAwesomeIcon icon={faPhotoVideo} /> Photo or Video
        </label>
        <button type="submit">Post</button>
      </BottomContainer>
    </MakePostContainer>
  );
};

export default MakePost;

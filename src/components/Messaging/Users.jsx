import React from "react";
import styled from "styled-components";
import { user, user1, user2 } from "../../assets/images";

const UsersSectionWrapper = styled.div`
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.7)`
      : `rgba(${props.theme.bodyRgba},.3)`};

  height: 90%;
  width: 15%;
  padding: 30px 50px;
  margin-right: 40px;

  border-radius: 30px;
  overflow-y: scroll;
  flex-shrink: 0;

  h2 {
    margin: 10px 0px;
    color: ${(props) => props.theme.accent};
  }

  .userDiv {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5px 0;
    padding: 10px 0;
    height: 55px;
    width: 100%;
    cursor: pointer;

    .userImg {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid ${(props) => props.theme.main};
      box-sizing: border-box;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .userInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 20px;
      color: ${(props) => props.theme.main};

      h3 {
        font-size: 20px;
      }

      p {
        margin: 0;
        margin-top: 5px;
        font-size: 12px;
        color: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 1445px) {
    width: 180px;
  }

  @media (max-width: 1000px) {
    height: 80%;
    width: 100%;
    flex-shrink: 1;
    padding: 10px 0px;
    margin-bottom: 30px;
    h2 {
      margin: 30px 30px 20px;
    }

    .userDiv {
      margin: 5px 30px;
      height: 40px;
    }
  }

  @media (max-width: 1000px) {
    height: 85%;
    margin: 20px 40px 0;
    width: calc(100% - 80px);
  }

  @media (max-width: 475px) {
    width: calc(100% - 30px);
    margin: 20px 15px 0;
  }
`;

const Users = ({ themeCurrent }) => {
  return (
    <UsersSectionWrapper themeCurrent={themeCurrent}>
      <h2>Messages</h2>
      <div className="userDiv">
        <div className="userImg">
          <img src={user1} alt="" />
        </div>
        <div className="userInfo">
          <h3>Jane</h3>
          <p>Last message!</p>
        </div>
      </div>
      <div className="userDiv">
        <div className="userImg">
          <img src={user2} alt="" />
        </div>
        <div className="userInfo">
          <h3>Jane</h3>
          <p>Last message!</p>
        </div>
      </div>
      <div className="userDiv">
        <div className="userImg">
          <img src={user} alt="" />
        </div>
        <div className="userInfo">
          <h3>Jane</h3>
          <p>Last message!</p>
        </div>
      </div>
    </UsersSectionWrapper>
  );
};

export default Users;

import React from "react";
import styled from "styled-components";
import { user, user1, user2 } from "../../assets/images";

const UsersSectionWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 90%;
  width: 250px;
  padding: 30px 30px;
  border-radius: 20px;
  overflow-y: scroll;
  flex-shrink: 0;

  .userDiv {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    /* border-bottom: 1px solid steelblue; */
    margin: 12px 0;
    padding: 10px 0;
    height: 75px;
    width: 100%;
    cursor: pointer;

    .userImg {
      height: 50px;
      width: 50px;
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

      h3 {
        font-size: 25px;
      }

      p {
        margin: 0;
        margin-top: 10px;

        /* font-family: ${(props) => props.theme.fontFamily}; */
        font-size: 15px;
        color: #a1a1a1;
      }
    }
  }

  /* .userDiv:hover {
    transition: 0.5s ease-in;
    background-color: #1a1a1a;
  } */
`;

const Users = () => {
  return (
    <UsersSectionWrapper>
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

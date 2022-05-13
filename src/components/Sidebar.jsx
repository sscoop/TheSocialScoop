import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const MainContainer = styled.div`
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.7)`
      : `rgba(${props.theme.bodyRgba},.4)`};

  height: 90%;
  width: 15%;
  padding: 30px 50px;
  border-radius: 30px;
  overflow-y: scroll;
  flex-shrink: 0;
  h2 {
    margin: 10px 0px;
    color: ${(props) => props.theme.accent};
  }

  ul {
    width: 100%;
    padding: 0;
    li {
      list-style: none;
      height: 75px;
      /* padding: 5px; */
      margin: 15px 0;
      border-right: ${(props) => `1px solid rgba(${props.theme.mainRgba}, .3)`};

      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;

      .profilePicture {
        height: 50px;
        width: 50px;
        margin-right: 10px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid ${(props) => props.theme.main};
        box-sizing: border-box;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }

      .details {
        margin-left: 5px;
        font-size: 15px;
      }

      &:hover {
        border-right: ${(props) => `1px solid ${props.theme.accent}`};
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
  }
  @media (max-width: 1000px) {
    height: 85%;
    margin-bottom: 20px;
    display: none;
  }
`;

const Sidebar = ({ themeCurrent }) => {
  const userName = useSelector((state) => state.user.currentUser.username);
  const [friendsList, setFriendsList] = useState([]);
  const getFriends = async () => {
    try {
      const res = await publicRequest.get(`users/friends/${userName}`);
      setFriendsList(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(friendsList);

  return (
    <MainContainer themeCurrent={themeCurrent}>
      <h2>Friends</h2>
      <ul>
        {friendsList.map((friend) => (
          <li key={friend._id}>
            <div className="profilePicture">
              <img
                src={
                  friend.profilePicture
                    ? friend.profilePicture
                    : "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                }
                alt=""
              />
            </div>
            <div className="details">{friend.name}</div>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Sidebar;

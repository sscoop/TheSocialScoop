import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUsers } from "../../redux/API Calls/apiCalls";
import { getConversations } from "../../redux/API Calls/convoApiCalls";

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
      color: ${(props) => props.theme.main};

      h3 {
        font-size: 20px;
      }

      p {
        margin: 0;
        margin-top: 5px;
        font-size: 13.5px;
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

const Conversations = ({ themeCurrent, users, setUsers, setOpenConvo }) => {
  const dispatch = useDispatch();
  const { _id: userId } = useSelector((state) => state.user.currentUser);

  const getConvo = () => {
    getConversations(dispatch, userId);
  };

  useEffect(() => {
    getConvo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const conversations = useSelector(
    (state) => state.conversations.conversations
  );

  const getDetails = async (userIds) => {
    const userDetails = await getUsers(dispatch, userIds);
    setUsers(userDetails);
  };

  const setConversation = (id) => {
    const selectedConvo = conversations.find((convo) =>
      convo.members.find((userId) => userId === id)
    );

    setOpenConvo(selectedConvo);
  };

  useEffect(() => {
    const userIds = conversations[0]._id
      ? conversations.map((convo) => {
          if (convo.members[0] === userId) {
            return convo.members[1];
          } else {
            return convo.members[0];
          }
        })
      : [];
    getDetails(userIds);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversations, userId]);

  // console.log("convo: ", conversations);
  // console.log("user: ", users);

  return (
    <UsersSectionWrapper themeCurrent={themeCurrent}>
      <h2>Conversations</h2>
      {users &&
        users.map((user) => {
          return (
            <div
              className="userDiv"
              key={user.userId}
              onClick={() => {
                // console.log(user.userId);
                return setConversation(user.userId);
              }}
            >
              <div className="userImg">
                <img
                  src={
                    user.profilePicture
                      ? user.profilePicture
                      : "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                  }
                  alt=""
                />
              </div>
              <div className="userInfo">
                <h3>{user.name}</h3>
                <p>{user.username}</p>
              </div>
            </div>
          );
        })}
    </UsersSectionWrapper>
  );
};

export default Conversations;

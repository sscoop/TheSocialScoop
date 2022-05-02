import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { user1, user2 } from "../../assets/images";
import Message from "./Message";

const ChatSectionWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  height: calc(90% + 60px);
  width: 65%;
  margin: 0 40px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    top: -5px;
    left: 0;
    width: 100%;
    height: 0px;
    position: absolute;
<<<<<<< HEAD
    box-shadow: ${(props) => `0px 5px 50px 45px ${props.theme.body}`};
=======
    box-shadow: ${(props) => `0px 5px 50px 20px ${props.theme.body}`};
>>>>>>> a0eeb1130bb26cf7fcc4ff424a2dfe5159ca9694
  }

  .chat-section {
    height: calc(100% - 90px);
    overflow-y: scroll;
    margin: 0 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 40px 20px;
    @media (max-width: 1250px) {
      padding: 40px 0px;
    }
  }

  .lower-section {
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${(props) =>
      `0px -5px 15px 5px rgba(${props.theme.mainRgba},.15)`};
    transition: all 0.2s ease;

    .msgInput {
      width: 80%;
      background: transparent;
      border: none;
      padding: 20px;
      color: #ffffff;
      outline: none;
      margin: 0 20px;
      font-size: 17px;
      color: ${(props) => props.theme.main};
    }

    .sendBtn {
      border: none;
      padding: 10px;
      border-radius: 10px;
      width: 15%;
      margin: 20px;
      background-color: ${(props) => props.theme.accent};
      color: ${(props) => props.theme.text};
    }
  }
`;

const Chat = () => {
  return (
    <ChatSectionWrapper>
      <div className="chat-section">
        <Message userPic={user1} />
        <Message userPic={user2} own={true} />
        <Message userPic={user1} />
        <Message userPic={user2} own={true} />
        <Message userPic={user1} />
        <Message userPic={user2} own={true} />
        <Message userPic={user1} />
        <Message userPic={user2} own={true} />
      </div>

      <div className="lower-section">
        <input
          type="text"
          placeholder="Enter your message..."
          className="msgInput"
        />
        <button className="sendBtn">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </ChatSectionWrapper>
  );
};

export default Chat;

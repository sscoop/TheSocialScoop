import React from "react";
import styled from "styled-components";
import { user1, user2 } from "../../assets/images";
import Message from "./Message";

const ChatSectionWrapper = styled.div`
  flex: 5;

  height: 100%;
  width: 70%;
  background-color: ${(props) => props.theme.body};
  border-radius: 10px;
  color: ${(props) => props.theme.main};
  margin: 0 10px;
  /* padding: 20px; */
  /* border: 1px solid #fff; */
  /* overflow: hidden; */

  .chat-section {
    height: 500px;
    overflow-y: scroll;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  .lower-section {
    height: 90px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .msgInput {
      width: 80%;
      background: transparent;
      border: none;
      padding: 20px;
      color: #fff;
      outline: none;

      margin: 0 20px;
      font-size: 17px;
    }

    .msgInput:focus {
      border-top: 1px solid #dacc87;
    }

    .sendBtn {
      border: none;
      padding: 10px;
      border-radius: 10px;
      width: 15%;
      margin: 20px;
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
        <button className="sendBtn">Send</button>
      </div>
    </ChatSectionWrapper>
  );
};

export default Chat;

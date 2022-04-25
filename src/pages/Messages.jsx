import React from "react";
import styled from "styled-components";
import Chat from "../components/Messaging/Chat";
import Users from "../components/Messaging/Users";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

const MainConatiner = styled.div`
  /* background-color: ${(props) => props.theme.body}; */
  background: transparent;
  color: ${(props) => props.theme.text};
  /* height: 100%; */

  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* margin: 0 20px; */
`;

const Messages = ({ setThemeDark, theme }) => {
  return (
    <>
      <TopBar setThemeDark={setThemeDark} theme={theme} />
      <MainConatiner>
        <NavBar />
        <Chat />
        <Users />
      </MainConatiner>
    </>
  );
};

export default Messages;

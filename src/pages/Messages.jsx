import React from "react";
import Chat from "../components/Messaging/Chat";
import Users from "../components/Messaging/Users";
import NavBar from "../components/NavBar";

const Messages = ({ setThemeDark, theme }) => {
  let mobile =
    (window.innerWidth > 0 ? window.innerWidth : window.screen.width) < 1000;

  return (
    <>
      <NavBar />
      {!mobile && <Chat />}
      <Users />
    </>
  );
};

export default Messages;

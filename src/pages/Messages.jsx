import React from "react";
import Chat from "../components/Messaging/Chat";
import Users from "../components/Messaging/Users";
import NavBar from "../components/NavBar";

const Messages = ({ setThemeDark, theme }) => {
  return (
    <>
      <NavBar />
      <Chat />
      <Users />
    </>
  );
};

export default Messages;

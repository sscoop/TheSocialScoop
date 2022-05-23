import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import Chat from "../components/Messaging/Chat";
import Conversations from "../components/Messaging/Conversations";
import NavBar from "../components/NavBar";

const Messages = ({ themeCurrent }) => {
  let mobile =
    (window.innerWidth > 0 ? window.innerWidth : window.screen.width) < 1000;

  const currentUser = useSelector((state) => state.user.currentUser);

  const [users, setUsers] = useState([]);
  const [openConvo, setOpenConvo] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8080");

    socket.current.on("getMessage", (data) =>
      setArrivalMessage({
        senderId: data.senderId,
        message: data.message,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   arrivalMessage &&
  //     openConvo?.members.includes(arrivalMessage.senderId) &&
  //     setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage, openConvo]);

  useEffect(() => {
    socket.current.emit("addUser", currentUser._id);
    socket.current.on("getUsers", (users) => console.log(users));
  }, [currentUser]);

  return (
    <>
      <NavBar themeCurrent={themeCurrent} />
      {!mobile && openConvo && (
        <Chat
          themeCurrent={themeCurrent}
          openConvo={openConvo}
          users={users}
          arrivalMessage={arrivalMessage}
          socket={socket}
        />
      )}
      <Conversations
        themeCurrent={themeCurrent}
        users={users}
        setUsers={setUsers}
        setOpenConvo={setOpenConvo}
      />
    </>
  );
};

export default Messages;

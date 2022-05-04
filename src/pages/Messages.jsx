import React from "react";
// import { io } from "socket.io-client";
import Chat from "../components/Messaging/Chat";
import Users from "../components/Messaging/Users";
import NavBar from "../components/NavBar";

const Messages = ({ themeCurrent }) => {
  let mobile =
    (window.innerWidth > 0 ? window.innerWidth : window.screen.width) < 1000;

  // const [socket, setSocket] = useState(null);

  //   setSocket(io("ws://localhost:8080"));
  // }, []);
  // console.log(socket);

  return (
    <>
      <NavBar themeCurrent={themeCurrent} />
      {!mobile && <Chat themeCurrent={themeCurrent} />}
      <Users themeCurrent={themeCurrent} />
    </>
  );
};

export default Messages;

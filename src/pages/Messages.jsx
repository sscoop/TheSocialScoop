import React from "react";
// import { io } from "socket.io-client";
import Chat from "../components/Messaging/Chat";
import Users from "../components/Messaging/Users";
import NavBar from "../components/NavBar";

const Messages = ({ setThemeDark, theme }) => {
<<<<<<< HEAD
  let mobile =
    (window.innerWidth > 0 ? window.innerWidth : window.screen.width) < 1000;
=======
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   setSocket(io("ws://localhost:8080"));
  // }, []);
  // console.log(socket);
>>>>>>> a0eeb1130bb26cf7fcc4ff424a2dfe5159ca9694

  return (
    <>
      <NavBar />
      {!mobile && <Chat />}
      <Users />
    </>
  );
};

export default Messages;

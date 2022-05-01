import React from "react";
// import { io } from "socket.io-client";
import Chat from "../components/Messaging/Chat";
import Users from "../components/Messaging/Users";
import NavBar from "../components/NavBar";

const Messages = ({ setThemeDark, theme }) => {
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   setSocket(io("ws://localhost:8080"));
  // }, []);
  // console.log(socket);

  return (
    <>
      <NavBar />
      <Chat />
      <Users />
    </>
  );
};

export default Messages;

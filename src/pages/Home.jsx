import React from "react";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = ({ themeCurrent }) => {
  return (
    <>
      <NavBar />
      <Feed />
      <Sidebar />
    </>
  );
};

export default Home;

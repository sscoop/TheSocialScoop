import React from "react";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = ({ theme, setThemeDark }) => {
  return (
    <>
      <NavBar />
      <Feed />
      <Sidebar />
    </>
  );
};

export default Home;

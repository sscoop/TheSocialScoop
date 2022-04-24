// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const MainConatiner = styled.div`
  background: transparent;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;
const Container = styled.div`
  height: calc(100vh - 120px);
`;

const Home = ({ theme, setThemeDark }) => {
  return (
    <MainConatiner>
      <TopBar setThemeDark={setThemeDark} theme={theme} />
      <Container>
        <NavBar />
        <Feed />
        <Sidebar />
      </Container>
    </MainConatiner>
  );
};

export default Home;

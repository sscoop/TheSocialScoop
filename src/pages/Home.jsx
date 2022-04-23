import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const MainConatiner = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;
const Container = styled.div``;

const Home = () => {
  return (
    <MainConatiner>
      <TopBar />
      <Container>
        <NavBar />
        <Feed />
        <Sidebar />
      </Container>
      <FontAwesomeIcon icon={faTwitter} />
    </MainConatiner>
  );
};

export default Home;

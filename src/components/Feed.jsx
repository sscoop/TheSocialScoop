import React from "react";
import styled from "styled-components";
import MakePost from "./MakePost";
import Post from "./Post";
const MainContainer = styled.div`
  width: 100%;
  z-index: 1;
  height: 98%;
  padding: 5px 40px;
  overflow: hidden;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  @media (max-width: 1000px) {
    padding: 5px 0px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  z-index: 1;
  height: auto;
`;

const Feed = ({ themeCurrent }) => {
  return (
    <MainContainer>
      <Container>
        <MakePost themeCurrent={themeCurrent} />
        <Post themeCurrent={themeCurrent} />
        <Post themeCurrent={themeCurrent} />
        <Post themeCurrent={themeCurrent} />
        <Post themeCurrent={themeCurrent} />
        <Post themeCurrent={themeCurrent} />
      </Container>
    </MainContainer>
  );
};

export default Feed;

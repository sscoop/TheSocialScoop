import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.pri};
  height: 50px;
`;
const Left = styled.div``;
const Right = styled.div``;

const TopBar = () => {
  return (
    <Container>
      <Left>The Social Scoop</Left>
      <Right></Right>
    </Container>
  );
};

export default TopBar;

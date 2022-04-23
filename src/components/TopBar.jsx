import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
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

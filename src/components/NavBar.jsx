import {
  faGear,
  faHome,
  faMessage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 90%;
  width: 55px;
  padding: 30px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  @media (max-width: 1250px) {
    width: 100px;
  }
  @media (max-width: 1000px) {
    height: 80px;
    width: 100%;
    padding: 30px 0px;
    flex-direction: row;
  }
  @media (max-width: 600px) {
    height: 20px;
    width: 100%;
    padding: 30px 0px;
  }
`;
const IconContainer = styled(Link)`
  width: 65%;
  height: calc(120px * 0.55);
  position: relative;
  margin: 5px 0;
  color: ${(props) => `rgba(${props.theme.mainRgba},0.6)`};
  &:hover {
    color: ${(props) => `rgba(${props.theme.mainRgba},1)`};
  }

  .navIcon {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 770px) {
    height: 35%;
    height: calc(120px * 0.35);
  }
  @media (max-width: 600px) {
    width: 20%;
    height: calc(120px * 0.2);
  }
`;

const NavBar = () => {
  return (
    <MainContainer>
      <IconContainer to="/">
        <FontAwesomeIcon className="navIcon" icon={faHome} />
      </IconContainer>
      <IconContainer to="/search">
        <FontAwesomeIcon className="navIcon" icon={faSearch} />
      </IconContainer>
      <IconContainer to="/messages">
        <FontAwesomeIcon className="navIcon" icon={faMessage} />
      </IconContainer>
      <IconContainer to="settings">
        <FontAwesomeIcon className="navIcon" icon={faGear} />
      </IconContainer>
    </MainContainer>
  );
};

export default NavBar;

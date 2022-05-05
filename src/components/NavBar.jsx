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
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.7)`
      : `rgba(${props.theme.bodyRgba},.4)`};
  height: 90%;
  width: 70px;
  padding: 30px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;

  @media (max-width: 1000px) {
    height: 45px;
    width: 100%;
    padding: 30px 0px;
    flex-direction: row;
  }

  @media (max-width: 650px) {
    height: 20px;
    width: 100%;
    padding: 30px 0px;
  }
`;
const IconContainer = styled(Link)`
  width: 55%;
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

  @media (max-width: 1000px) {
    height: 4%;
    height: calc(120px * 0.4);
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

const NavBar = ({ themeCurrent }) => {
  return (
    <MainContainer themeCurrent={themeCurrent}>
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

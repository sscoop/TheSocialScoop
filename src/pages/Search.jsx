import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const SearchContainer = styled.div`
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.3)`
      : `rgba(${props.theme.bodyRgba},.3)`};
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  height: 90%;
  width: 90%;
  padding: 30px 50px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;

  @media (max-width: 1300px) {
    padding: 30px;
  }
  @media (max-width: 1000px) {
    margin-left: 0;
    width: calc(100% - 60px);
    margin-bottom: 20px;
    overflow-y: scroll;
  }
`;
const Query = styled.h2`
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme.accent};
  font-size: 40px;
  @media (max-width: 1000px) {
    margin-top: 80px;
  }
`;
const Results = styled.div`
  background-color: #ad2727;
`;

const Search = ({ themeCurrent }) => {
  const query = useLocation().pathname.split("/")[2];

  return (
    <>
      <NavBar themeCurrent={themeCurrent} />
      <SearchContainer>
        {query && <Query>Showing Results for: {query}</Query>}
        <Results></Results>
      </SearchContainer>
    </>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Users from "../components/FindUsers/Users";
import NavBar from "../components/NavBar";
// import Sidebar from "../components/Sidebar";
import { publicRequest } from "../requestMethods";

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
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 30px;

  @media (max-width: 1300px) {
    padding: 30px;
  }
  @media (max-width: 1000px) {
    margin-left: 0;
    padding: 15px;
    width: calc(100% - 30px);
    margin-bottom: 20px;
    overflow-y: scroll;
  }
`;
const Query = styled.h2`
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme.accent};
  font-size: 20px;
  @media (max-width: 1000px) {
    margin-top: 80px;
    font-size: 15px;
  }
`;
const Results = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 10px;

  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;

const Search = ({ themeCurrent }) => {
  const query = useLocation().pathname.split("/")[2];
  const [users, setUsers] = useState({});

  useEffect(() => {
    const showResults = async () => {
      if (!query) return setUsers({});
      const res = await publicRequest.get(`users/${query}`);

      setUsers(res.data);
    };
    showResults();
  }, [query]);

  return (
    <>
      <NavBar themeCurrent={themeCurrent} />
      <SearchContainer>
        <Query>
          {query
            ? `Showing Results for: ${query}`
            : "Search for a user to see results!!"}
        </Query>
        <Results>
          {users ? (
            Object.keys(users).map((key) => (
              <Users key={key} user={users[key]} />
            ))
          ) : (
            <h2>Hey! User feeling alone find some friends now</h2>
          )}
        </Results>
      </SearchContainer>
      {/* <Sidebar /> */}
    </>
  );
};

export default Search;

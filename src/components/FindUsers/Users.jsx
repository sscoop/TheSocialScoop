import React from "react";
import styled from "styled-components";
// import { publicRequest } from "../../requestMethods";

const UserWrapper = styled.div`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.5)`
      : `rgba(${props.theme.bodyRgba},.5)`};
  color: ${(props) => props.theme.accent};
  border-radius: 10px;
  border-top: ${(props) => `1px solid rgba(${props.theme.mainRgba}, 0.5)`};
  border-left: ${(props) => `1px solid rgba(${props.theme.mainRgba}, 0.5)`};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &:hover {
    background: ${(props) =>
      props.themeCurrent === "dark"
        ? `rgba(${props.theme.bodyRgba},.3)`
        : `rgba(${props.theme.bodyRgba},.3)`};
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 5px;
  }
`;

const Left = styled.div`
  flex: 1;
  margin-left: 15px;
  .profilePicture {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.main};
    box-sizing: border-box;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

const Center = styled.div`
  flex: 5;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  h4 {
    font-size: 20px;
    margin-right: 15px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15px;

    h4 {
      width: 100%;
      margin-right: 0;
    }
  }
`;

const Right = styled.div`
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  button {
    width: 45%;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 700;
    padding: 10px;
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.body};
    cursor: pointer;

    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const Users = ({ user }) => {
  //   const followUser = async (id) => {
  //     try {
  //         await publicRequest.put(`/users/follow/${id}`, )
  //     } catch (error) {

  //     }
  //   };
  // onClick={() => followUser(user._id)}

  return (
    <UserWrapper>
      <Left>
        <div className="profilePicture">
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
            }
            alt=""
          />
        </div>
      </Left>
      <Center>
        <h4>{user.name}</h4>
        <p>({user.username})</p>
      </Center>
      <Right>
        <button>Follow</button>
      </Right>
    </UserWrapper>
  );
};

export default Users;

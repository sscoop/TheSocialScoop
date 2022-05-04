import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const MainContainer = styled.span`
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.3)`
      : `rgba(${props.theme.bodyRgba},.5)`};

  height: 90%;
  width: 90%;
  padding: 30px 50px;
  margin-left: 30px;
  display: flex;
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
const ImageSectionWrapper = styled.div`
  height: 100%;
  width: 45%;
  @media (max-width: 1300px) {
    width: 30%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const FormSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;

  @media (max-width: 1300px) {
    width: 65%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  h1 {
    margin: 10px 0;
    color: ${(props) => props.theme.accent};
    font-size: 50px;
    @media (max-width: 1000px) {
      font-size: 40px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0 40px;
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
      width: 90%;
      margin: 10px 0;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 10px 0;
      h2 {
        color: ${(props) => props.theme.main};
        @media (max-width: 1000px) {
          font-size: 15px;
          margin: 5px 0;
        }
      }
    }
    input {
      font-size: 15px;
      font-weight: 400;
      width: 100%;
      background: transparent;
      border: none;
      border-radius: 30px;
      color: ${(props) => props.theme.main};
      outline: 1px solid ${(props) => props.theme.text};
      padding: 15px 30px;
      margin: 10px 0;
      box-sizing: border-box;
      @media (max-width: 1000px) {
        font-size: 12px;
        padding: 12px 30px;
      }
    }

    .submit-btn {
      width: 80%;
      padding: 20px 30px;
      margin: 20px 0;
      font-size: 15px;
      font-weight: 600;
      border: none;
      outline: none;
      border-radius: 30px;
      background-color: ${(props) => props.theme.accent};
      @media (max-width: 1000px) {
        font-size: 12px;
        padding: 12px 30px;
        margin: 10px 0;
      }
    }
  }

  .sign-up-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 1300px) {
      width: 90%;
    }
    @media (max-width: 1000px) {
      font-size: 12px;
      padding: 12px 30px;
      margin: 0;
    }

    .divider {
      margin: 0 0 10px 0;
      width: 100%;
      height: 0.75px;
      border-radius: 1px;
      background-color: ${(props) => props.theme.main};
    }
    .sign-up {
      color: ${(props) => props.theme.main};
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;

      p {
        margin: 0;
        text-align: center;
        @media (max-width: 650px) {
          margin: 0 0 15px;
        }
      }

      @media (max-width: 650px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }

      .sign-up-btn {
        padding: 15px 30px;
        font-size: 15px;
        border-radius: 30px;
        background-color: transparent;
        border: 2px solid ${(props) => props.theme.text};
        color: ${(props) => props.theme.main};
        @media (max-width: 1300px) {
          font-size: 12px;
          padding: 10px 30px;
        }
      }
    }
  }
`;

const Login = ({ themeCurrent }) => {
  console.log("themeCurrent", themeCurrent);
  return (
    <>
      <NavBar themeCurrent={themeCurrent} />
      <MainContainer themeCurrent={themeCurrent}>
        <ImageSectionWrapper>Image Section Wrapper</ImageSectionWrapper>
        <FormSectionWrapper>
          <h1>Login</h1>

          <form>
            <label htmlFor="username">
              <h2>Username</h2>
              <input
                type="text"
                name="username"
                placeholder="Please enter your Username"
              />
            </label>
            <label htmlFor="password">
              <h2>Password</h2>
              <input
                type="password"
                name="password"
                placeholder="Please enter your Password"
              />
            </label>
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>

          <div className="sign-up-wrapper">
            <div className="divider" />
            <p className="sign-up">
              <p>Don't have an Account? Sign Up Now!</p>
              <button className="sign-up-btn">Sign Up</button>
            </p>
          </div>
        </FormSectionWrapper>
      </MainContainer>
    </>
  );
};

export default Login;

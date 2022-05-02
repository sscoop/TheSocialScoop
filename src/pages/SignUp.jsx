import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signUpImg } from "../assets/images";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 600px;
  width: 100vw;
  margin: 45px;
  padding: 20px;

  font-family: ${(props) => props.theme.fontFamily};
  /* font-family: "Source Sans Pro"; */
`;

const ImageSectionWrapper = styled.div`
  flex: 3;

  height: 100%;
  margin: 25px;
  margin-top: 50px;
  /* padding: 15px; */
  background-image: ${`url(${signUpImg})`};
  background-repeat: repeat-y;
  border-radius: 20px;
  background-size: 100%;
  text-align: center;

  .card {
    backdrop-filter: blur(5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    width: 75%;
    height: 45%;
    /* padding: 50px; */
    margin: auto;
    margin-top: 150px;

    h2 {
      margin-top: 50px;
      font-size: 50px;
      font-weight: 700;
      color: ${(props) => props.theme.body};
    }

    p {
      font-size: 20px;
      font-weight: 600;
      color: ${(props) => props.theme.main};
      text-align: center;
      margin: 25px;
    }
  }
`;

const FormSectionWrapper = styled.div`
  flex: 2;

  margin: 15px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #1d1d1d;
  border-radius: 10px;

  h2 {
    margin: 10px 0 50px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 20px 0;
    width: 100%;
    height: 100%;

    input {
      font-size: 15px;
      font-weight: 600;
      width: 80%;
      /* background: #2a2a2a; */
      background-color: transparent;
      border: none;
      border-radius: 5px;
      color: #f3f4fa;
      padding: 15px;
      outline: 1px solid #656565;
      margin: 10px 0;
      text-align: center;

      &:focus {
        outline: 1px solid #9d9da0;
      }
    }

    .sign-up-btn {
      width: 85%;
      margin: 15px 0;
      padding: 15px;
      font-size: 15px;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      background-color: #1867de;
      cursor: pointer;
    }
  }

  .divider {
    margin: 0 0 10px 0;
    width: 90%;
    height: 0.75px;
    border-radius: 1px;
    background-color: #656565;
  }

  .login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 25px 0;

    .login-text {
      color: ${(props) => props.theme.main};
      margin-right: 20px;
    }

    .login-btn {
      margin: 15px 0;
      width: 100%;
      padding: 15px;
      font-size: 15px;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      background-color: ${(props) => props.theme.accent};
      align-self: flex-end;
      cursor: pointer;
    }
  }
`;

const SignUp = () => {
  return (
    <MainWrapper>
      <ImageSectionWrapper>
        <div className="card">
          <h2>Glad to have you here!</h2>
          <p>
            Hey Abhishek! This is a mess. But I know you can fix it mate. After
            looking at it I beleive that you have got the idea (the backdrop
            content to be showed on that background), jsut fix this mate!
          </p>
        </div>
      </ImageSectionWrapper>
      <FormSectionWrapper>
        <form action="">
          <input type="text" name="name" placeholder="Enter your Name" />

          <input
            type="text"
            name="username"
            placeholder="Set your unique Username"
          />

          <input type="text" name="email" placeholder="Enter your Email ID" />

          <input
            type="password"
            name="password"
            placeholder="Create your Account Password"
          />

          {/* <input
            type="password"
            name="password"
            placeholder="Confirm your Account Password"
          /> */}

          <button type="submit" className="sign-up-btn">
            Sign Up
          </button>
        </form>

        <div className="divider" />

        <div className="login-wrapper">
          <p className="login-text">Already have an Account? Login Now! </p>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </FormSectionWrapper>
    </MainWrapper>
  );
};

export default SignUp;

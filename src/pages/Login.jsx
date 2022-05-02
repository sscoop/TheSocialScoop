import React from "react";
import styled from "styled-components";

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
  border: 1px solid yellow;
  flex: 3;

  height: 100%;
  margin: 25px;
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

    margin: 50px 0;
    width: 100%;
    height: 100%;

    input {
      font-size: 15px;
      font-weight: 600;
      width: 80%;
      background: #2a2a2a;
      border: none;
      border-radius: 5px;
      color: #f3f4fa;
      padding: 15px;
      outline: 1px solid #656565;
      margin: 25px 0;
      text-align: center;
    }

    .submit-btn {
      width: 85%;
      padding: 15px;
      font-size: 15px;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      background-color: #098a1c;
    }
  }

  .divider {
    margin: 10px 0;
    width: 90%;
    height: 0.75px;
    border-radius: 1px;
    background-color: #e2e2e2;
  }

  .sign-up-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .sign-up-text {
      color: ${(props) => props.theme.main};
      margin-right: 20px;
    }

    .sign-up-btn {
      margin: 15px 0;
      width: 30%;
      padding: 15px;
      font-size: 15px;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      background-color: ${(props) => props.theme.accent};
      align-self: flex-end;
    }
  }
`;

const Login = () => {
  return (
    <MainWrapper>
      <ImageSectionWrapper>Image Section Wrapper</ImageSectionWrapper>
      <FormSectionWrapper>
        <form action="">
          <input type="text" name="email" placeholder="Enter your Email ID" />

          <input
            type="password"
            name="password"
            placeholder="Enter your Account Password"
          />

          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>

        <div className="divider" />

        <div className="sign-up-wrapper">
          <p className="sign-up-text">Don't have an Account? Sign Up Now! </p>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </FormSectionWrapper>
    </MainWrapper>
  );
};

export default Login;

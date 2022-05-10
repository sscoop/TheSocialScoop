import React, { useState } from "react";
import styled from "styled-components";
const Messages = styled.span`
  color: ${(props) => props.theme.accent};
  font-size: 12px;
  margin-bottom: 15px;
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const UniqueInput = ({ handleChange, setSignupProgression, userData }) => {
  const [error, setError] = useState({ state: false, msg: "" });
  const validator = () => {
    if (!userData.email) {
      error.state = true;
      error.msg = "Please enter your Email...";
      setError((p) => ({ ...p, state: true }));
    } else {
      if (!userData.username) {
        error.state = true;
        error.msg = "Please enter a Username...";
        setError((p) => ({ ...p, state: true }));
      } else {
        // check for uniqueness tbd

        error.state = false;
        error.msg = "";
      }
    }
    if (!error.state) setSignupProgression(2);
  };

  return (
    <>
      {!error.state ? (
        <Messages className="error">Please enter your details...</Messages>
      ) : (
        <Messages className="error" style={{ color: "violet" }}>
          {error.msg}
        </Messages>
      )}
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => handleChange(e)}
          value={userData.email}
          required
        />
      </label>
      <label htmlFor="username">
        <input
          type="text"
          name="username"
          placeholder="Username... "
          onChange={(e) => handleChange(e)}
          value={userData.username}
          required
        />
      </label>
      <div className="split">
        <button
          className="prev-btn first-prev-btn"
          onClick={() => setSignupProgression(1)}
        >
          Back
        </button>
        <button className="prev-btn" onClick={validator}>
          Next
        </button>
      </div>
    </>
  );
};

export default UniqueInput;

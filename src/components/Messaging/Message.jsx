import React from "react";
import styled from "styled-components";

const Text = styled.div`
  display: flex;
  justify-content: ${(props) => (props.own ? "flex-end" : "flex-start")};
  align-items: center;

  .message {
    display: flex;
    flex-direction: ${(props) => (props.own ? "row-reverse" : "row")};
    justify-content: center;
    align-items: flex-start;
    width: 75%;
  }

  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin: 5px;
    cursor: pointer;
  }

  .text {
    background-color: ${(props) =>
      !props.own ? `rgba(${props.theme.bodyRgba},.4)` : props.theme.accent};
    color: ${(props) =>
      !props.own
        ? `rgba(${props.theme.mainRgba},.8)`
        : props.themeCurrent === "dark"
        ? props.theme.body
        : props.theme.main};
    border-radius: ${(props) =>
      !props.own ? "0 30px 30px 30px" : "30px 0 30px 30px"};
    padding: 30px;
    font-weight: 200;
    margin-top: 25px;
  }
`;

const Message = ({ userPic, own = false, themeCurrent }) => {
  return (
    <Text own={own} themeCurrent={themeCurrent}>
      <div className="message">
        <img src={userPic} alt="" className="userImg" />
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cum quia
          corporis soluta aut delectus odio necessitatibus, eius blanditiis
          obcaecati voluptatibus dolorum provident, veritatis consectetur.
          Laborum inventore officia illo recusandae.
        </p>
      </div>
    </Text>
  );
};

export default Message;

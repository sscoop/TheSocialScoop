import React from "react";
import styled from "styled-components";

const Text = styled.div`
  .messageWapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .messageWapper.own {
    justify-content: flex-end;
  }

  .message {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 45%;
  }

  .message.own {
    flex-direction: row-reverse;
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
    /* background: linear-gradient(90deg, #415dcb, #0f35ce); */
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
    padding: 1rem;
    border-radius: 5px;
  }

  .text.own {
    /* background: linear-gradient(90deg, #a4a4a4, #e4e4e4); */
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
  }
`;

const Message = ({ userPic, own = false }) => {
  return (
    <Text>
      <div className={own ? "messageWapper own" : "messageWapper"}>
        <div className={own ? "message own" : "message"}>
          <img src={userPic} alt="" className="userImg" />
          <p className={own ? "text own" : "text"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cum
            quia corporis soluta aut delectus odio necessitatibus, eius
            blanditiis obcaecati voluptatibus dolorum provident, veritatis
            consectetur. Laborum inventore officia illo recusandae.
          </p>
        </div>
      </div>
    </Text>
  );
};

export default Message;

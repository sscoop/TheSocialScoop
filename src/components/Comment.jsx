import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},.3)`};
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 15px;
  img {
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    flex: 1;
  }
  .commentOption {
    padding-left: 20px;
    cursor: pointer;
  }
`;
const Comment = () => {
  return (
    <CommentContainer>
      <img
        src="https://media.istockphoto.com/photos/profile-of-a-female-doctor-picture-id1313720249?b=1&k=20&m=1313720249&s=170667a&w=0&h=Z13IkuY6kFGRX1dnsMsTbE6Mvsp9a85OCu-Slr9ECr8="
        alt=""
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        doloremque sint odit dolorem vitae beatae!
      </p>
      <FontAwesomeIcon className="commentOption" icon={faEllipsisV} />
    </CommentContainer>
  );
};

export default Comment;

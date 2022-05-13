import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const PostContainer = styled.div`
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.85)`
      : `rgba(${props.theme.bodyRgba},.6)`};
  border-radius: 30px;
  margin-top: 30px;
  padding: 20px 30px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
const Media = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 30px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    top: 0;
    right: -15px;
    background-color: ${(props) => `rgba(${props.theme.mainRgba},.3)`};
  }
  img {
    height: 100%;
    width: 100%;
    background-color: ${(props) => `rgba(${props.theme.mainRgba},.1)`};
    border-radius: 15px;
    object-fit: contain;
  }
`;
const SideContainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: #000; */
`;
const TopSection = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .left {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 50%;
    }
    h3 {
      margin-left: 10px;
    }
  }
`;
const Caption = styled.p`
  width: 100%;
  max-height: 35%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},.3)`};
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 15px;
`;
const Comments = styled.div`
  width: 100%;
  height: 45%;
  position: relative;
  overflow-y: hidden;
  .commentList {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

const Post = ({ themeCurrent }) => {
  return (
    <PostContainer themeCurrent={themeCurrent}>
      <Media>
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </Media>
      <SideContainer>
        <TopSection>
          <div className="left">
            <img
              src="https://media.istockphoto.com/photos/profile-of-a-female-doctor-picture-id1313720249?b=1&k=20&m=1313720249&s=170667a&w=0&h=Z13IkuY6kFGRX1dnsMsTbE6Mvsp9a85OCu-Slr9ECr8="
              alt=""
            />
            <h3>Username</h3>
          </div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </TopSection>
        <Caption>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          molestiae cupiditate dignissimos quas, rerum quo quod laborum
          inventore iure expedita molestias illo soluta impedit similique natus
          aperiam minima. Quia, dicta rerum reiciendis recusandae aut odio
          dignissimos sed eveniet, odit ad soluta non magnam minus facilis
          perferendis, totam error voluptatum! Amet. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dolorum corrupti ut ad accusantium, at
          voluptate provident facilis harum esse dignissimos optio temporibus
          aliquid, blanditiis sapiente sed neque reiciendis? Animi, aut?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Illo, qui
          provident. Ullam explicabo nesciunt, sint earum architecto amet soluta
          quos quam itaque repudiandae eveniet velit enim omnis ducimus
          quibusdam quas eum a hic minus sapiente, numquam aspernatur deleniti
          minima! Quis maxime nobis laudantium voluptas nulla explicabo
          consequuntur hic magni, eum exercitationem itaque vel minima adipisci
          architecto tenetur unde odio excepturi? Inventore, commodi dolorem
          aliquid quam consequatur optio, magni praesentium quasi et quod ad?
          Nihil accusantium cumque omnis iste rem quod quos sapiente minus
          tempore facilis temporibus quidem provident adipisci architecto nemo
          error molestiae, ex sint at excepturi harum porro ipsum.
        </Caption>
        <Comments>
          <h3>Comments</h3>
          <div className="commentList">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </Comments>
      </SideContainer>
    </PostContainer>
  );
};

export default Post;

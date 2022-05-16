import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPosts } from "../redux/apiCalls";
import MakePost from "./MakePost";
import Post from "./Post";
const MainContainer = styled.div`
  width: 100%;
  z-index: 1;
  height: 98%;
  padding: 5px 40px;
  overflow: hidden;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  @media (max-width: 1000px) {
    padding: 5px 40px;
    width: calc(100% - 80px);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  z-index: 1;
  height: auto;
`;

const Feed = ({ themeCurrent }) => {
  const [posts, setPosts] = useState([]);
  const postsList = useSelector((state) => state.posts.postsList);
  const { _id: userId } = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    // const getPosts = async () => {
    //   const { data } = await publicRequest.get(`/posts/${userId}`);
    //   setPosts(data);
    // };
    getPosts(dispatch, userId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPosts([...postsList]);
  }, [postsList]);

  return (
    <MainContainer>
      <Container>
        <MakePost themeCurrent={themeCurrent} />
        {posts.map((post) => (
          <Post themeCurrent={themeCurrent} post={post} key={post._id} />
        ))}
      </Container>
    </MainContainer>
  );
};

export default Feed;

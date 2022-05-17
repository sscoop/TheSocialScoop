import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPosts } from "../redux/apiCalls";
import MakePost from "./MakePost";
import Post from "./Post";
const MainContainer = styled.div`
  width: 100%;
  z-index: 1;
  height: 95%;
  padding: 10px 60px 40px;
  margin: 0 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  position: relative;
  overflow-y: scroll;
  border-radius: 30px;
  scroll-behavior: smooth;
  @media (max-width: 1400px) {
    padding: 10px 40px;
    margin: 0 5px;
  }
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
  const [postMod, setPostMod] = useState(0);
  const postsList = useSelector((state) => state.posts.postsList);
  const { _id: userId } = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    // const getPosts = async () => {
    //   const { data } = await publicRequest.get(`/posts/${userId}`);
    //   setPosts(data);
    // };
    getPosts(dispatch, userId);
    setPostMod(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postMod]);

  useEffect(() => {
    setPosts([...postsList]);
  }, [postsList, postMod]);

  return (
    <MainContainer>
      <Container>
        <MakePost themeCurrent={themeCurrent} setPostMod={setPostMod} />
        {posts.map((post) => (
          <Post themeCurrent={themeCurrent} post={post} key={post._id} />
        ))}
      </Container>
    </MainContainer>
  );
};

export default Feed;

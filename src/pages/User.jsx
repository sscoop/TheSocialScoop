import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MakePost from "../components/MakePost";
import NavBar from "../components/NavBar";
import SingleUserPosts from "../components/SingleUserPosts";
import { publicRequest } from "../requestMethods";

// const MainContainer = styled.div`
//   background: ${(props) =>
//     props.themeCurrent === "dark"
//       ? `rgba(${props.theme.bodyRgba},.3)`
//       : `rgba(${props.theme.bodyRgba},.3)`};
//   box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
//   border-top: 1px solid rgba(255, 255, 255, 0.5);
//   border-left: 1px solid rgba(255, 255, 255, 0.5);
//   height: 90%;
//   width: 90%;
//   padding: 30px 50px;
//   margin-left: 30px;
//   margin-right: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 30px;

//   @media (max-width: 1300px) {
//     padding: 30px;
//   }
//   @media (max-width: 1000px) {
//     margin-left: 0;
//     padding: 15px;
//     width: calc(100% - 30px);
//     margin-bottom: 20px;
//     overflow-y: scroll;
//   }
// `;

const MainSection = styled.div`
  height: 90%;
  width: 100%;
  padding: 5px;
  overflow-y: scroll;
  margin-left: 30px;
  margin-right: 30px;

  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background: ${(props) =>
      props.themeCurrent === "dark"
        ? `rgba(${props.theme.bodyRgba},.85)`
        : `rgba(${props.theme.bodyRgba},.6)`};
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    border-bottom: 0.5px solid ${(props) => props.theme.accent};

    .image-container {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid ${(props) => props.theme.main};
      box-sizing: border-box;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .details {
      width: 70%;
      height: 50px;
      margin-left: 15px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      h3 {
        font-size: 35px;
        color: ${(props) => `rgba(${props.theme.mainRgba}, .9)`};
        margin: 10px 0 10px 10px;
      }

      h5 {
        font-size: 22px;
        color: ${(props) => props.theme.accent};
        margin: 10px 0 10px 10px;
      }
    }

    .button {
      button {
        border: 1px solid ${(props) => props.theme.accent};
        background: transparent;
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 15px;
        font-weight: 600;
        color: ${(props) => props.theme.accent};
        cursor: pointer;

        .icon {
          margin-right: 10px;
        }
      }
    }
    //
    @media (max-width: 1000px) {
      .image-container {
        flex: 2;
        width: 45px;
        height: 45px;
      }

      .details {
        flex: 5;
        h3 {
          font-size: 20px;
          margin-left: 0;
          margin-bottom: 0;
        }

        h5 {
          margin-left: 0;
          margin-top: 0;
          font-size: 15px;
        }
      }

      .button {
        flex: 1;
        /* width: 45%; */
        button {
          width: 100%;
          padding: 10px 30px;
          font-size: 12px;
        }

        .icon {
          display: none;
          margin-right: 0;
        }
      }
    }
  }

  .middle {
    background: ${(props) =>
      props.themeCurrent === "dark"
        ? `rgba(${props.theme.bodyRgba},.85)`
        : `rgba(${props.theme.bodyRgba},.6)`};
    padding: 15px;
    margin: 10px 0;
    border-radius: 10px;
    border-bottom: 0.5px solid ${(props) => props.theme.accent};

    h4 {
      font-size: 35px;
      color: ${(props) => `rgba(${props.theme.mainRgba}, .9)`};
    }

    p {
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => `rgba(${props.theme.mainRgba}, .7)`};
      /* color: ${(props) => props.theme.text}; */
    }

    @media (max-width: 1000px) {
      h4 {
        font-size: 20px;
      }

      p {
        font-size: 13px;
        line-height: 18.5px;
      }
    }
  }

  .lower {
    background: ${(props) =>
      props.themeCurrent === "dark"
        ? `rgba(${props.theme.bodyRgba},.85)`
        : `rgba(${props.theme.bodyRgba},.6)`};
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    border-bottom: 0.5px solid ${(props) => props.theme.accent};

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    h3 {
      font-size: 25px;
      color: ${(props) => `rgba(${props.theme.mainRgba}, .9)`};
    }

    p {
      font-size: 18px;
      font-weight: 600;
      color: ${(props) => `rgba(${props.theme.mainRgba}, .7)`};
    }

    @media (max-width: 1000px) {
      /* padding: 5px; */
      justify-content: space-between;
      h3 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 1300px) {
    padding: 30px;
  }
  @media (max-width: 1000px) {
    margin-left: 0;
    padding: 15px;
    width: calc(100% - 30px);
    margin-bottom: 20px;
    overflow-y: scroll;
  }
`;

const User = ({ themeCurrent }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [userPosts, setUserPosts] = useState([]);

  const fetchUserPosts = async () => {
    const { data } = await publicRequest.get(`/posts/profile/${user._id}`);

    setUserPosts(data);
  };

  useEffect(() => {
    fetchUserPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      {/* <MainContainer> */}
      <MainSection>
        <div className="top">
          <div className="image-container">
            <img
              src={
                user.profilePicture
                  ? user.profilePicture
                  : "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
              }
              alt=""
            />
          </div>

          <div className="details">
            <h3>{user.name}</h3>
            <h5>{user.username}</h5>
          </div>

          <div className="button">
            <Link to="/editform">
              <button>
                <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                Edit
              </button>
            </Link>
          </div>
        </div>

        <div className="middle">
          <h4>Bio</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            eligendi atque sapiente, maxime totam deleniti voluptatum amet,
            dolorum aut sed eius? Atque illo itaque voluptates explicabo
            adipisci rerum deserunt facilis!
          </p>
        </div>

        <div className="lower">
          <div className="posts">
            <h3>Posts</h3>
            <p>{userPosts.length}</p>
          </div>

          <div className="followers">
            <h3>Followers</h3>
            <p>{user.followers.length}</p>
          </div>

          <div className="following">
            <h3>Following</h3>
            <p>{user.following.length}</p>
          </div>
        </div>

        <MakePost themeCurrent={themeCurrent} />

        {userPosts.map((post) => (
          <SingleUserPosts
            themeCurrent={themeCurrent}
            post={post}
            user={user}
            key={post._id}
          />
        ))}
      </MainSection>
      {/* </MainContainer> */}
    </>
  );
};

export default User;

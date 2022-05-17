import { faAngleDown, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MakePost from "../components/MakePost";
import NavBar from "../components/NavBar";
import SingleUserPosts from "../components/SingleUserPosts";
import { publicRequest } from "../requestMethods";

const MainSection = styled.div`
  height: 98%;
  width: 100%;
  padding: 0 40px 0;
  overflow-y: scroll;
  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background: ${(props) =>
      props.themeCurrent === "dark"
        ? `rgba(${props.theme.bodyRgba},.85)`
        : `rgba(${props.theme.bodyRgba},.6)`};
    padding: 20px 30px;
    margin: 0 0 10px;
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
      flex: 1;
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
        width: 45px;
        height: 45px;
      }

      .details {
        flex: 7;
        width: 100%;
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
        /* width: 15%; */
        button {
          /* align-self: flex-end;
          width: 70%; */
          border: none;
          padding: 5px;
          font-size: 20px;
        }

        .icon {
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
    padding: 20px 30px;
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
    padding: 20px 30px;
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

  .hiddenSection {
    background: ${(props) =>
      props.themeCurrent === "dark"
        ? `rgba(${props.theme.bodyRgba},.85)`
        : `rgba(${props.theme.bodyRgba},.6)`};
    padding: 20px 40px;
    margin: 10px 0;
    border-radius: 10px;
    border-bottom: 0.5px solid ${(props) => props.theme.accent};
    height: max-content;
    overflow: hidden;

    .backIcon {
      color: ${(props) => props.theme.main};
      font-size: 30px;
      text-align: center;
      .icon {
        transition: transform 0.25s ease-in-out;
        &:hover {
          transform: rotate(180deg);
          color: ${(props) => props.theme.accent};
        }
      }
    }

    .static {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid
        ${(props) =>
          props.themeCurrent === "dark"
            ? `rgba(${props.theme.mainRgba},.85)`
            : `rgba(${props.theme.mainRgba},.6)`};

      div {
        width: 100%;
        text-align: center;

        h3 {
          font-size: 25px;
          cursor: pointer;
        }
        .active {
          color: ${(props) => props.theme.accent};
        }
      }
    }

    .dynamic {
      height: 100%;
      overflow-y: scroll;
      ul {
        width: 100%;
        padding: 0;
        li {
          list-style: none;
          height: 75px;
          margin: 15px 0;
          width: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;

          .profilePicture {
            height: 50px;
            width: 50px;
            margin-right: 10px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid ${(props) => props.theme.main};
            box-sizing: border-box;
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
              cursor: pointer;
            }
          }

          .details {
            margin-left: 5px;
            font-size: 15px;
            flex: 1;
          }

          &::after {
            content: "";
            background-color: ${(props) => `rgba(${props.theme.mainRgba}, .3)`};
            top: 0;
            right: 0;
            height: 70%;
            width: 2px;
          }

          &:hover {
            .profilePicture {
              border: 1px solid ${(props) => `${props.theme.accent}`};
            }
            .details {
              color: ${(props) => `${props.theme.main}`};
            }
            &::after {
              background-color: ${(props) => `${props.theme.accent}`};
            }
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
    padding: 15px;
    width: calc(100% - 30px);
    margin-bottom: 20px;
    overflow-y: scroll;
  }
`;

const Profile = ({ themeCurrent }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [userPosts, setUserPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [postMod, setPostMod] = useState(0);
  const [onHide, setOnHide] = useState(true);
  const [onFollowers, setOnFollowers] = useState(true);

  let mobile =
    (window.innerWidth > 0 ? window.innerWidth : window.screen.width) < 750;

  const fetchUserPosts = async () => {
    const { data } = await publicRequest.get(`/posts/profile/${user._id}`);
    const postList = data.map((post) => ({
      ...post,
      profilePicture: user.profilePicture,
      username: user.username,
      name: user.name,
    }));
    setUserPosts(postList);
  };
  useEffect(() => {
    fetchUserPosts();
    setPostMod(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postMod]);

  const fetchFollowers = async () => {
    const { data } = await publicRequest.get(
      `users/followers/${user.username}`
    );

    setFollowers(data);
  };

  const fetchFollowing = async () => {
    const { data } = await publicRequest.get(`users/friends/${user.username}`);

    setFollowing(data);
  };

  useEffect(() => {
    fetchUserPosts();
    fetchFollowers();
    fetchFollowing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavBar themeCurrent={themeCurrent} />
      {/* <MainContainer> */}
      <MainSection themeCurrent={themeCurrent}>
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
              {!mobile ? (
                <button>
                  <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                  Edit
                </button>
              ) : (
                <button>
                  <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                </button>
              )}
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

          <div
            className="followers"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOnHide(false);
              setOnFollowers(true);
            }}
          >
            <h3>Followers</h3>
            <p>{followers.length}</p>
          </div>

          <div
            className="following"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOnHide(false);
              setOnFollowers(false);
            }}
          >
            <h3>Following</h3>
            <p>{following.length}</p>
          </div>
        </div>

        {onHide && (
          <>
            <MakePost themeCurrent={themeCurrent} setPostMod={setPostMod} />

            {userPosts.map((post) => (
              <SingleUserPosts
                setPostMod={setPostMod}
                themeCurrent={themeCurrent}
                userPost={post}
                // user={user}
                key={post._id}
              />
            ))}
          </>
        )}

        {!onHide && (
          <div className="hiddenSection">
            <div className="backIcon">
              <FontAwesomeIcon
                icon={faAngleDown}
                className="icon"
                onClick={() => setOnHide(true)}
              />
            </div>
            <div className="static">
              <div>
                <h3 className="active">
                  {onFollowers ? "Followers" : "Following"}
                </h3>
              </div>
            </div>

            <div className="dynamic">
              <ul>
                {onFollowers
                  ? followers.map((friend) => (
                      <li key={friend._id}>
                        <div className="profilePicture">
                          <Link to={`/user/${friend.username}`}>
                            <img
                              src={
                                friend.profilePicture
                                  ? friend.profilePicture
                                  : "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="details">{friend.name}</div>
                      </li>
                    ))
                  : following.map((friend) => (
                      <li key={friend._id}>
                        <div className="profilePicture">
                          <Link to={`/user/${friend.username}`}>
                            <img
                              src={
                                friend.profilePicture
                                  ? friend.profilePicture
                                  : "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="details">{friend.name}</div>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        )}
      </MainSection>
      {/* </MainContainer> */}
    </>
  );
};

export default Profile;

import {
  faBullhorn,
  faGear,
  faMoon,
  faSkullCrossbones,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { logOut } from "../redux/userSlice";

const MainContainer = styled.div`
  background: ${(props) =>
    props.themeCurrent === "dark"
      ? `rgba(${props.theme.bodyRgba},.3)`
      : `rgba(${props.theme.bodyRgba},.3)`};
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  height: 90%;
  width: 90%;
  padding: 30px 50px;
  margin-left: 30px;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  overflow-y: scroll;
  border-radius: 30px;

  @media (max-width: 1300px) {
    padding: 30px;
  }
  @media (max-width: 1000px) {
    margin-left: 0;
    width: calc(100% - 60px);
    margin-bottom: 20px;
    overflow-y: scroll;
  }
`;

const TopSection = styled.div`
  /* border: 1px solid yellow; */
  /* height: 125px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon {
    width: 50px;
    height: 50px;
    margin-right: 5px;
    color: ${(props) => props.theme.accent};
  }

  h2 {
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    margin-left: 5px;
    color: ${(props) => props.theme.main};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 90%;
      height: 1px;
      top: 15px;
      right: -15px;
      background-color: ${(props) => `rgba(${props.theme.mainRgba},.5)`};

      @media (max-width: 1000px) {
        width: 30%;
      }
    }
  }
`;

const MiddleSection = styled.div`
  color: ${(props) => props.theme.main};
  p {
    font-size: 17px;
    font-weight: 500;
  }

  .settings-sections {
    margin: 15px 0;
    .heading {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      h4 {
        width: 100%;
        font-size: 25px;
        font-weight: 600;
        color: ${(props) => `rgba(${props.theme.mainRgba},.9)`};

        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 76%;
          height: 1px;
          top: 25px;
          right: -15px;
          background-color: ${(props) => `rgba(${props.theme.mainRgba},.5)`};
        }
        @media (max-width: 1000px) {
          font-size: 19px;
          &::after {
            display: none;
          }
        }
      }

      /* div {
        flex: 5;
        width: 100%;
        height: 1px;
        background-color: ${(props) => `rgba(${props.theme.mainRgba},.5)`};
        margin-left: 10px;
      } */
    }

    .icon {
      width: 35px;
      height: 35px;
      margin-right: 15px;
      color: ${(props) => props.theme.accent};

      @media (max-width: 1000px) {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }

    .setDefaultTheme {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .choice {
        margin-left: 5px;

        label {
          margin: 0 15px;

          .icon {
            width: 20px;
            height: 20px;
            margin: 0 5px;
            color: ${(props) => props.theme.main};
          }

          .current {
            color: ${(props) => props.theme.accent};
          }
        }
      }

      @media (max-width: 1000px) {
        flex-direction: column;

        .choice {
          margin-left: 0;
        }
      }
    }

    .options {
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      margin-top: 15px;
      button {
        margin: 0 5px;
        border: 1px solid #f72727;
        border-radius: 30px;
        padding: 10px 30px;
        color: #f72727;
        background: transparent;
        font-size: 15px;
        font-weight: 700;
      }
    }

    .privacy {
      margin: 15px 0;
      p {
        font-size: 17px;
        font-weight: 500;

        @media (max-width: 1000px) {
          font-size: 14px;
        }
      }

      button {
        border: 1px solid ${(props) => props.theme.accent};
        border-radius: 30px;
        padding: 10px 30px;
        background: transparent;
        color: ${(props) => props.theme.accent};
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.body};
          background-color: ${(props) => props.theme.accent};
        }

        @media (max-width: 1000px) {
          font-size: 12px;
        }
      }
    }

    .termsandconditions {
      margin: 15px 0;
      p {
        font-size: 17px;
        font-weight: 500;

        @media (max-width: 1000px) {
          font-size: 14px;
        }
      }

      button {
        border: 1px solid ${(props) => props.theme.accent};
        border-radius: 30px;
        padding: 10px 30px;
        background: transparent;
        color: ${(props) => props.theme.accent};
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.body};
          background-color: ${(props) => props.theme.accent};
        }

        @media (max-width: 1000px) {
          font-size: 12px;
        }
      }
    }
  }
`;

const LowerSection = styled.div`
  color: ${(props) => props.theme.main};

  .settings-sections {
    margin: 15px 0;
    .heading {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      h4 {
        width: 100%;
        font-size: 20px;
        font-weight: 600;

        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 85%;
          height: 1px;
          top: 25px;
          right: -15px;
          /* background-color: ${(props) =>
            `rgba(${props.theme.mainRgba},.5)`}; */
          background-color: #f72727;
        }

        @media (max-width: 1000px) {
          font-size: 17px;

          &::after {
            width: 35%;
            height: 0.5px;
            top: 15px;
          }
        }
      }

      /* div {
        flex: 5;
        width: 100%;
        height: 1px;
        background-color: ${(props) => `rgba(${props.theme.mainRgba},.5)`};
        margin-left: 10px;
      } */
    }

    .icon {
      width: 35px;
      height: 35px;
      margin-right: 15px;
      font-size: 25px;
      color: #f72727;

      @media (max-width: 1000px) {
        width: 25px;
        height: 25px;
      }
    }

    .options {
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      margin-top: 15px;
      button {
        margin: 0 5px;
        border: 1px solid #f72727;
        border-radius: 30px;
        padding: 10px 30px;
        color: #f72727;
        background: transparent;
        font-size: 15px;
        font-weight: 700;
      }
      @media (max-width: 1000px) {
        flex-direction: column;
        height: 100%;

        button {
          margin: 5px 0;
          width: 100%;
          font-size: 13px;
        }
      }
    }
  }
`;

const Settings = ({ user, themeCurrent }) => {
  const dispatch = useDispatch();
  const signOut = () => {
    if (user) {
      dispatch(logOut());
    }
  };
  // console.log(themeCurrent);

  return (
    <>
      <NavBar />
      <MainContainer>
        <TopSection>
          <FontAwesomeIcon className="icon" icon={faGear} />
          <h2>Setting's</h2>
        </TopSection>

        <MiddleSection>
          <p>
            Hey! {user.name}, have a look at your setting. Not convinced change
            it now!
          </p>
          <div className="settings-sections">
            <div className="heading">
              <h4>
                {themeCurrent !== "dark" ? (
                  <FontAwesomeIcon className="icon" icon={faSun} />
                ) : (
                  <FontAwesomeIcon className="icon" icon={faMoon} />
                )}
                Theme Setting's
              </h4>
            </div>

            <div className="setDefaultTheme">
              <p>Set Your Default Theme |</p>

              <div className="choice">
                <input type="radio" id="dark" style={{ display: "none" }} />
                <label htmlFor="dark">
                  <FontAwesomeIcon
                    className={`icon ${
                      themeCurrent === "dark" ? "current" : ""
                    }`}
                    icon={faMoon}
                  />
                  Dark
                </label>

                <input type="radio" id="light" style={{ display: "none" }} />
                <label htmlFor="light">
                  <FontAwesomeIcon
                    className={`icon ${
                      themeCurrent !== "dark" ? "current" : ""
                    }`}
                    icon={faSun}
                  />
                  Light
                </label>
              </div>
            </div>

            <div className="settings-sections">
              <div className="heading">
                <h4>
                  <FontAwesomeIcon icon={faBullhorn} className="icon" />
                  Privacy Policy
                </h4>
              </div>

              <div className="privacy">
                <p>
                  Want to know more about our privacy policy! Head towards our
                  Privacy Policy Section to know more about our initatives to
                  make your data more protected.
                </p>

                <Link to="/priavcypolicy">
                  <button>
                    Click Here to read more about our privacy policy
                  </button>
                </Link>
              </div>
            </div>

            <div className="settings-sections">
              <div className="heading">
                <h4>
                  <FontAwesomeIcon icon={faBullhorn} className="icon" />
                  Terms and Conditions
                </h4>
              </div>

              <div className="termsandconditions">
                <p>
                  Want to know more about our terms and conditions! Head towards
                  our Terms and Conditions Section to know more about the terms
                  you are aggering upon.
                </p>

                <Link to="/termsandconditions">
                  <button>
                    Click Here to read more about our terms and conditions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </MiddleSection>

        <LowerSection>
          <div className="settings-sections">
            <div className="heading">
              <h4>
                <FontAwesomeIcon icon={faSkullCrossbones} className="icon" />
                Danger Zone
              </h4>
            </div>

            <div className="options">
              <button onClick={signOut}>Logout</button>
              <button>Delete Account</button>
            </div>
          </div>
        </LowerSection>
      </MainContainer>
    </>
  );
};

export default Settings;

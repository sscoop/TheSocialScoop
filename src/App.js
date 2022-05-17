import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./components/Themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useEffect, useState } from "react";
import Messages from "./pages/Messages";
import TopBar from "./components/TopBar";
import Login from "./pages/Login";
import Search from "./pages/Search";
import bgDark from "./assets/bgDark.jpg";
import bgLight from "./assets/bgLight.jpg";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import User from "./pages/User";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  z-index: 0;

  background: ${(props) =>
    props.themeColor === "dark" ? ` url(${bgDark})` : ` url(${bgLight})`};

  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100vw 100vh;
  @media (max-width: 1000px) {
    height: ${`${window.innerHeight}px`};
  }
`;
const MainConatiner = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  z-index: 10;
  background: transparent;
`;
const Container = styled.div`
  height: calc(100% - 180px);
  padding: 40px 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  background: transparent;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 475px) {
    height: calc(100vh - 140px);
    padding: 0px 0px 20px;
  }
`;

function App() {
  const [themeDark, setThemeDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    user ? setThemeDark(user.prefersDarkTheme) : setThemeDark((p) => p);
  }, [user]);

  return (
    <Main themeColor={themeDark ? "dark" : "light"}>
      <GlobalStyles />
      <ThemeProvider theme={themeDark ? darkTheme : lightTheme}>
        <MainConatiner>
          <TopBar
            setThemeDark={setThemeDark}
            themeCurrent={themeDark ? "dark" : "light"}
            user={user}
          />
          <Container>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  user ? (
                    <Home themeCurrent={themeDark ? "dark" : "light"} />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/settings"
                exact
                element={
                  user ? (
                    <Settings
                      themeCurrent={themeDark ? "dark" : "light"}
                      user={user}
                    />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path={"/search/:query"}
                element={
                  <Search
                    themeCurrent={themeDark ? "dark" : "light"}
                    name={user ? user.name : ""}
                  />
                }
              />
              <Route
                path={"/search"}
                element={
                  <Search
                    themeCurrent={themeDark ? "dark" : "light"}
                    name={user ? user.name : ""}
                  />
                }
              />
              <Route
                path="/messages"
                exact
                element={
                  user ? (
                    <Messages themeCurrent={themeDark ? "dark" : "light"} />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/login"
                exact
                element={
                  user ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Login themeCurrent={themeDark ? "dark" : "light"} />
                  )
                }
              />
              <Route
                path="/signup"
                exact
                element={
                  user ? (
                    <Navigate to="/" replace />
                  ) : (
                    <SignUp themeCurrent={themeDark ? "dark" : "light"} />
                  )
                }
              />
              <Route
                path={`/profile/${user?._id}`}
                element={
                  <Profile themeCurrent={themeDark ? "dark" : "light"} />
                }
              />
              <Route
                path={`/user/:username`}
                element={<User themeCurrent={themeDark ? "dark" : "light"} />}
              />
            </Routes>
          </Container>
        </MainConatiner>
      </ThemeProvider>
    </Main>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./components/Themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Messages from "./pages/Messages";
import TopBar from "./components/TopBar";
import Login from "./pages/Login";
import Search from "./components/Search";
import bgDark from "./assets/bgDark.jpg";
import bgLight from "./assets/bgLight.jpg";
import SignUp from "./pages/SignUp";

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
`;
const MainConatiner = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  z-index: 10;
  background: transparent;
`;
const Container = styled.div`
  height: calc(100vh - 180px);
  padding: 40px 40px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  background: transparent;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 475px) {
    height: calc(100vh - 140px);
    padding: 0px 15px 20px;
  }
`;

function App() {
  const [themeDark, setThemeDark] = useState(true);
  const user = true;

  return (
    <Main themeColor={themeDark ? "dark" : "light"}>
      <GlobalStyles />
      <ThemeProvider theme={themeDark ? darkTheme : lightTheme}>
        <MainConatiner>
          <TopBar
            setThemeDark={setThemeDark}
            themeCurrent={themeDark ? "dark" : "light"}
          />
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  user ? (
                    <Home themeCurrent={themeDark ? "dark" : "light"} />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/search/:query"
                element={
                  user ? (
                    <Search themeCurrent={themeDark ? "dark" : "light"} />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/messages"
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
                themeCurrent={themeDark ? "dark" : "light"}
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
                themeCurrent={themeDark ? "dark" : "light"}
                element={
                  user ? (
                    <Navigate to="/" replace />
                  ) : (
                    <SignUp themeCurrent={themeDark ? "dark" : "light"} />
                  )
                }
              />
            </Routes>
          </Container>
        </MainConatiner>
      </ThemeProvider>
    </Main>
  );
}

export default App;

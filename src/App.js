import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./components/Themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Messages from "./pages/Messages";
import TopBar from "./components/TopBar";
import Login from "./pages/Login";

const Main = styled.div`
  height: 100vh;
  width: 100vw;

  background: ${(props) =>
    props.themeColor === "dark"
      ? `linear-gradient(to left, #0a0a0a, #1a1a1a)`
      : `linear-gradient(to right, #D5EAF5 20%, #FFFFFF 90%)`};
  position: relative;
  overflow: hidden;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    background: ${(props) =>
      props.themeColor === "dark"
        ? `linear-gradient(to right, #0a0a0a 20%, #1a1a1a 90%)`
        : `linear-gradient(to right, #FFFFFF 20%, #D5EAF5 90%)`};
    height: 100vw;
    width: 150vw;
    top: 40vh;
    left: -45vw;
    transform: rotate(30deg);
    z-index: -10;
  }
`;
const MainConatiner = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  z-index: 1;
`;
const Container = styled.div`
  height: calc(100vh - 180px);
  padding: 0px 40px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
`;

function App() {
  const [themeDark, setThemeDark] = useState(true);
  const location = useLocation();
  const hideTopBar = location.pathname === "/login";

  return (
    <Main themeColor={themeDark ? "dark" : "light"}>
      <GlobalStyles />
      <ThemeProvider theme={themeDark ? darkTheme : lightTheme}>
        <MainConatiner>
          {!hideTopBar && (
            <TopBar
              setThemeDark={setThemeDark}
              theme={themeDark ? "dark" : "light"}
            />
          )}

          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setThemeDark={setThemeDark}
                    theme={themeDark ? "dark" : "light"}
                  />
                }
              />
              <Route
                path="/messages"
                element={
                  <Messages
                    setThemeDark={setThemeDark}
                    theme={themeDark ? "dark" : "light"}
                  />
                }
              />

              <Route path="/login" element={<Login />} />
            </Routes>
          </Container>
        </MainConatiner>
      </ThemeProvider>
    </Main>
  );
}

export default App;

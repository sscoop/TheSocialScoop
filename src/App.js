import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./components/Themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Messages from "./pages/Messages";

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) =>
    props.themeColor === "dark"
      ? `linear-gradient(to left, #030303, #1a1a1a)`
      : `linear-gradient(to right, #D5EAF5 20%, #FFFFFF 90%)`};
  position: relative;
  overflow: hidden;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    background: ${(props) =>
      props.themeColor === "dark"
        ? `linear-gradient(to right, #030303 20%, #1a1a1a 90%)`
        : `linear-gradient(to right, #FFFFFF 20%, #D5EAF5 90%)`};
    height: 100vw;
    width: 150vw;
    top: 40vh;
    left: -45vw;
    transform: rotate(30deg);
    z-index: -10;
  }
`;

function App() {
  const [themeDark, setThemeDark] = useState(true);
  return (
    <Main themeColor={themeDark ? "dark" : "light"}>
      <GlobalStyles />
      <ThemeProvider theme={themeDark ? darkTheme : lightTheme}>
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
        </Routes>
      </ThemeProvider>
    </Main>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./components/Themes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";

function App() {
  const [themeDark, setThemeDark] = useState(true);
  return (
    <>
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
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

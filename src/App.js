import "./styles.css";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, DarkTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MainContainerClass from "./components/MainContainer";

export default function App(props) {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : DarkTheme}>
        <GlobalStyle />
        <AnimatePresence>
          <MainContainerClass
            toggleTheme={toggleTheme}
            theme={theme === "light" ? lightTheme : DarkTheme}
          />
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  );
}

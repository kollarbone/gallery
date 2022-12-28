import "./styles.css";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, DarkTheme } from "./components/Themes";
import Main from "./components/Main";
import { AnimatePresence } from "framer-motion";
import { useCookies } from "react-cookie";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

export default function App(props) {
  const [theme, setTheme] = useState("dark");
  const [cookies, setCookie] = useCookies(["theme"]);
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    setCookie("theme", theme, { path: "/" });
  };
  console.log(cookies.theme);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={cookies.theme === "light" ? lightTheme : DarkTheme}>
        <AnimatePresence>
          <Main toggleTheme={toggleTheme} theme={cookies.theme} />
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  );
}

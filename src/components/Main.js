import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  height: fit-content;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }
`;
const Header = styled.div`
  width: 80vw;
  height: fit-content;
  position: relative;
`;
const Main = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Header></Header>
      <h2>123</h2>
    </MainContainer>
  );
};
export default Main;

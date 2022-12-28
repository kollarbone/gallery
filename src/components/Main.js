import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Logo from "./svg/logo";
import { BsSunFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";

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
  margin-top: 35px;
  height: fit-content;
  display: flex;
  width: 80vw;
  flex-direction: column;
  margin-bottom: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  div,
  input {
    min-width: 160px;
    max-width: 265px;
    width: 15vw;
    border: 1px solid ${(props) => props.theme.bodyRgba};
    border-radius: 8px;
    padding: 14px;
    background: ${(props) => props.theme.body};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;
const Main = (props) => {
  return (
    <MainContainer>
      <Header>
        <LogoContainer>
          <Logo />
          <BsSunFill
            style={{ color: props.theme.text, cursor: "pointer" }}
            onClick={props.toggleTheme}
          />
        </LogoContainer>
        <FilterContainer>
          <input placeholder="Name" />
          <div>
            <h5>Author</h5>
            <BsCaretDownFill color={props.theme.textRgba} />
          </div>
          <div>
            <h5>Location</h5>
            <BsCaretDownFill color={props.theme.textRgba} />
          </div>
          <div>
            <h5>Location</h5>
            <BsCaretDownFill color={props.theme.textRgba} />
          </div>
        </FilterContainer>
      </Header>
    </MainContainer>
  );
};
export default Main;

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Logo from "./svg/logo";
import { BsSunFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import axios from "axios";

const MainContainer = styled.div`
  max-width: 1150px;
  min-width: 300px;
  width: 70vw;
  margin: 0 auto;
  height: fit-content;
  position: relative;
  h2,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }
  h3 {
    font-weight: 700;
    font-family: "Karla", sans-serif;
  }
`;
const Header = styled.div`
  margin-top: 35px;
  height: fit-content;
  display: flex;
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
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
const NameArt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  div {
    position: inherit;
    background: rgba(255, 255, 255, 0.75);
    bottom: 54px;
    display: flex;
    min-height: 30px;
    align-items: center;
    max-width: 360px;
    min-width: 280px;
    width: 100vw;
    border-radius: 0px 0px 20px 20px;
  }
  h3 {
    margin-left: 15px;
  }
  img {
    max-width: 360px;
    border-radius: 20px;
    max-height: 275px;
    min-width: 280px;
    min-height: 205px;
    margin: 10px;
    width: 100vw;
  }
`;
const Main = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.harvardartmuseums.org/image?apikey=4da66dff-e03c-46a3-ac5e-e3fc8e071996&page=" +
          "1"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

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
      <MainBlock>
        {data &&
          data.records.map((i) => {
            return (
              <NameArt>
                <img src={i.baseimageurl} />
                {i.copyright && (
                  <div>
                    <h3>{i.copyright}</h3>
                  </div>
                )}
              </NameArt>
            );
          })}
      </MainBlock>
    </MainContainer>
  );
};
export default Main;

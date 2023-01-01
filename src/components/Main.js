import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Logo from "./svg/logo";
import {
  BsSunFill,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight
} from "react-icons/bs";
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
  margin-top: 30px;
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
  margin-bottom: 20px;
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
    bottom: 40px;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 15px;
  }
  img {
    max-width: 360px;
    border-radius: 20px;
    max-height: 275px;
    min-width: 280px;
    min-height: 205px;
    margin: 10px;
    width: 100vw;
    height: 100vw;
  }
`;
const Paggination = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 20px;
  cursor: pointer;
  li {
    padding: 10px;
    border: 1px solid ${(props) => props.theme.text};
    height: 20px;
    text-align: center;
    width: 20px;
    color: ${(props) => props.theme.text};
  }
  .active {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transition: all 0.2s ease-in, color 0.2s ease-in;
  }
  button {
    background: none;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.text};
    height: 42px;
    text-align: center;
    width: 41px;
    color: ${(props) => props.theme.text};
  }
`;
const Main = (props) => {
  const [data, setData] = useState(null);
  const currentData = (data) => {
    return data.map((i, index) => {
      return (
        <NameArt key={index}>
          <img src={url + i.imageUrl} alt="" />
          <div>
            <h3>{i.name}</h3>
          </div>
        </NameArt>
      );
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [];
  for (let i = 1; i <= 6; i++) {
    pages.push(i);
  }
  const handleClick = (event) => {
    setCurrentPage(Math.ceil(event.target.id));
  };
  const [pageNumberLimit, setNumberLimit] = useState(6);
  const [maxPageNumberLimit, setMaxNumberLimit] = useState(6);
  const [minPageNumberLimit, setMinNumberLimit] = useState(0);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  useEffect(() => {
    axios
      .get(
        "https://test-front.framework.team/paintings?_page=" +
          [currentPage] +
          "&_limit=6"
      )
      .then((response) => {
        setData(response.data);
      });
  });
  const url = "https://test-front.framework.team";

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
      <MainBlock>{data && currentData(data)}</MainBlock>
      <Paggination>
        <button>
          <BsChevronDoubleLeft
            style={{ color: props.theme.text, cursor: "pointer" }}
          />
        </button>
        <button>
          <BsChevronLeft
            style={{ color: props.theme.text, cursor: "pointer" }}
          />
        </button>
        {renderPageNumbers}
        <button>
          <BsChevronRight
            style={{ color: props.theme.text, cursor: "pointer" }}
          />
        </button>
        <button>
          <BsChevronDoubleRight
            style={{ color: props.theme.text, cursor: "pointer" }}
          />
        </button>
      </Paggination>
    </MainContainer>
  );
};
export default Main;

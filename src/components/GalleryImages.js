import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight
} from "react-icons/bs";

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
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  .hide {
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(255, 255, 255, 0.75);
    bottom: 10px;
    display: flex;
    flex-direction: column;
    min-height: 30px;
    align-items: flex-start;
    max-width: 360px;
    min-width: 280px;
    height: 30px;
    width: 100vw;
    border-radius: 0px 0px 20px 20px;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    h4 {
      visibility: hidden;
      display: none;
    }
    span {
      visibility: hidden;
      display: none;
    }
    h3 {
      margin-left: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 15px;
    }
  }
  .hide:hover {
    height: 145px;
    bottom: 10px;
    transition: all 0.2s ease-in-out;
    h4 {
      display: flex;
      visibility: visible;
      font-weight: 600;
      margin-left: 15px;
      margin-bottom: 5px;
      margin-right: 5px;
      color: #000;
    }
    span {
      visibility: visible;
      font-weight: 300;
      font-size: 13px;
      display: flex;
    }
    h3 {
      margin-left: 15px;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 15px;
      margin-bottom: 5px;
    }
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
  transition: all 0.2s ease-in-out;
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
    transition: all 0.2s ease-in-out;
  }
  .active:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
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
  li:hover {
    background-color: ${(props) => props.theme.textRgba};
    transition: all 0.2s ease-in-out;
  }
  button:hover {
    background-color: ${(props) => props.theme.textRgba};
    transition: all 0.2s ease-in-out;
  }
  .first {
    border: 1px solid ${(props) => props.theme.textRgba};
  }
  .last {
    border: 1px solid ${(props) => props.theme.textRgba};
  }
  .first:hover {
    background-color: ${(props) => props.theme.body};
  }
  .last:hover {
    background-color: ${(props) => props.theme.body};
  }
`;
const GalleryImages = (props) => {
  const [data, setData] = useState(null);
  const imageUrl = "https://test-front.framework.team";
  useEffect(() => {
    axios
      .get(
        "https://test-front.framework.team/paintings?_page=" +
          [currentPage] +
          "&_limit=12"
      )
      .then((response) => {
        setData(response.data);
      });
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [];
  for (let i = 1; i <= 3; i++) {
    pages.push(i);
  }
  const handleClick = (event) => {
    setCurrentPage(Math.ceil(event.target.id));
  };
  const pageNumberLimit = 3;
  const maxPageNumberLimit = 3;
  const minPageNumberLimit = 0;
  const handlePage = (page) => {
    setCurrentPage(page);
  };
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  console.log(currentPage);
  return (
    <>
      <MainBlock>
        {data &&
          data.map((i, index) => {
            return (
              <NameArt key={index}>
                <img src={imageUrl + i.imageUrl} alt="" />
                <div className="hide">
                  <h3>{i.name}</h3>
                  <span>
                    <h4>Author: </h4>
                    {props.autor.autor.map((a) => {
                      if (a.id === i.authorId) {
                        return a.name;
                      }
                    })}
                  </span>
                  <span>
                    <h4>Created: </h4> {i.created}
                  </span>
                  <span>
                    <h4>Location: </h4>{" "}
                    {props.autor.location.map((a) => {
                      if (a.id === i.locationId) {
                        return a.location;
                      }
                    })}
                  </span>
                </div>
              </NameArt>
            );
          })}
      </MainBlock>
      <Paggination>
        <button
          onClick={() => handlePage(1)}
          className={currentPage === 1 ? "first" : ""}
          style={{ borderRadius: "10px 0px 0px 10px" }}
        >
          <BsChevronDoubleLeft
            style={
              currentPage === 1
                ? {
                    color: props.theme.textRgba
                  }
                : { color: props.theme.text, cursor: "pointer" }
            }
          />
        </button>
        <button
          onClick={currentPage === 1 ? null : () => handlePage(currentPage - 1)}
          className={currentPage === 1 ? "first" : ""}
        >
          <BsChevronLeft
            style={
              currentPage === 1
                ? {
                    color: props.theme.textRgba
                  }
                : { color: props.theme.text, cursor: "pointer" }
            }
          />
        </button>
        {renderPageNumbers}
        <button
          onClick={
            currentPage === maxPageNumberLimit
              ? null
              : () => handlePage(currentPage + 1)
          }
          className={currentPage === pageNumberLimit ? "last" : ""}
        >
          <BsChevronRight
            style={
              currentPage === pageNumberLimit
                ? {
                    color: props.theme.textRgba
                  }
                : { color: props.theme.text, cursor: "pointer" }
            }
          />
        </button>
        <button
          onClick={() => handlePage(pageNumberLimit)}
          className={currentPage === pageNumberLimit ? "last" : ""}
          style={{ borderRadius: "0px 10px 10px 0px" }}
        >
          <BsChevronDoubleRight
            style={
              currentPage === pageNumberLimit
                ? {
                    color: props.theme.textRgba
                  }
                : { color: props.theme.text, cursor: "pointer" }
            }
          />
        </button>
      </Paggination>
    </>
  );
};
export default GalleryImages;

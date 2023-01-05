import Main from "./Main";
import axios from "axios";
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
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import GalleryImages from "./GalleryImages";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { autor: [], location: [], currentPage: 1, data: [] };
  }
  componentDidMount() {
    axios
      .get(
        "https://test-front.framework.team/paintings?_limit=12&_page=" +
          [this.state.currentPage]
      )
      .then((response) => {
        this.setState({ data: response.data });
      });
    axios.get("https://test-front.framework.team/authors").then((response) => {
      this.setState({ autor: response.data });
    });
    axios
      .get("https://test-front.framework.team/locations")
      .then((response) => {
        this.setState({ location: response.data });
      });
  }

  render() {
    const MainContainer = styled.div`
      max-width: 1160px;
      min-width: 300px;
      margin-left: auto;
      margin-right: auto;
      height: fit-content;
      position: relative;
      display: grid;
      grid-template-columns: 1;
      grid-template-rows: 3;
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
      @media (max-width: 790px) {
        justify-items: center;
      }
    `;
    const Header = styled.div`
      margin-top: 30px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      justify-content: center;
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
      .FilterContainer,
      input {
        position: relative;
        cursor: pointer;
        min-width: 150px;
        max-width: 280px;
        width: 100%;
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
        flex-wrap: wrap;
        transition: all 0.2s ease-in-out;
        :first-child {
          margin-left: 0px;
        }
        :last-child {
          margin-right: 0px;
        }
      }
      .openFilterContainer {
        border-radius: 8px 8px 0px 0px !important;
        position: relative;
        cursor: pointer;
        min-width: 150px;
        max-width: 280px;
        width: 100%;
        border: 1px solid ${(props) => props.theme.bodyRgba};
        padding: 14px;
        background: ${(props) => props.theme.body};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        margin-right: 10px;
        flex-wrap: wrap;
        transition: all 0.2s ease-in-out;
        :first-child {
          margin-left: 0px;
        }
        :last-child {
          margin-right: 0px;
        }
      }
      @media (max-width: 790px) {
        justify-content: center;
        flex-direction: column;
        .FilterContainer,
        input {
          width: 280px;
          :first-child {
            margin-left: 10px;
          }
          :last-child {
            margin-right: 10px;
          }
        }
        .openFilterContainer {
          width: 280px;
          :first-child {
            margin-left: 10px;
          }
          :last-child {
            margin-right: 10px;
          }
        }
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
    const DropdownMenuList = styled.div`
      transition: all 0.2s ease-in-out;
      position: absolute;
      box-sizing: border-box;
      width: 100.55%;
      z-index: 1;
      left: -1px;
      right: 0px;
      top: 44px;
      background: ${(props) => props.theme.body};
      border: 1px solid ${(props) => props.theme.bodyRgba};
      border-radius: 0px 0px 8px 8px;
      overflow: auto;
      max-height: 205px;
    `;
    const List = styled.div`
      color: ${(props) => props.theme.text};
      transition: all 0.2s ease-in-out;
      padding-top: 10px;
      padding-bottom: 10px;
      overflow: hidden;
      :hover {
        transition: all 0.2s ease-in-out;
        color: ${(props) => props.theme.body};
        background: ${(props) => props.theme.text};
      }
      :last-child {
        margin-bottom: 15px;
      }
      span {
        font-weight: 500;
        font-size: 16px;
        white-space: nowrap;
        transition: all 0.2s ease-in-out;
        text-overflow: ellipsis;
        cursor: pointer;
        margin-left: 30px;
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

    const pages = [];
    for (let i = 1; i <= 6; i++) {
      pages.push(i);
    }
    const handleClick = (event) => {
      this.setState({ currentPage: Math.ceil(event.target.id) });
      axios
        .get(
          "https://test-front.framework.team/paintings?_limit=12&_page=" +
            [event.target.id]
        )
        .then((response) => {
          this.setState({ data: response.data });
        });
    };
    const pageNumberLimit = 3;
    const maxPageNumberLimit = 3;
    const minPageNumberLimit = 0;
    const handlePage = (page) => {
      this.setState({ currentPage: page });
    };
    const renderPageNumbers = pages.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={this.state.currentPage === number ? "active" : null}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });
    // const [valueSearchName, setValueSearchName] = useState("");
    // const searchData = (data) => {
    //   const filteredCharacters = data.filter((i) => {
    //     return i.name.toLowerCase().includes(valueSearchName.toLowerCase());
    //   });
    //   return filteredCharacters;
    // };
    // const [selectedAutor, setSelectedAutor] = useState("");
    // const [isActive, setIsActive] = useState(false);
    // const DropdownMenu = () => {
    //   return (
    //     <DropdownMenuList className="DropdownMenuList">
    //       {autorSearch.map((autor) => {
    //         return (
    //           <List key={autor.id}>
    //             <span
    //               id={autor.name}
    //               name={autor.id}
    //               onClick={(e) => setSelectedAutor(e.target.id)}
    //             >
    //               {autor.name}
    //             </span>
    //           </List>
    //         );
    //       })}
    //     </DropdownMenuList>
    //   );
    // };
    const imageUrl = "https://test-front.framework.team";
    console.log(this.state.currentPage);
    return (
      <MainContainer>
        <Header>
          <LogoContainer>
            <Logo />
            <BsSunFill
              style={{ color: this.props.theme.text, cursor: "pointer" }}
              onClick={this.props.toggleTheme}
            />
          </LogoContainer>
          <FilterContainer>
            <input
              placeholder="Name"
              onChange={(event) => setValueSearchName(event.target.value)}
            />

            {/* <div
            onClick={(e) => setIsActive(!isActive)}
            className={isActive ? "openFilterContainer" : "FilterContainer"}
          >
            {selectedAutor ? <h5>{selectedAutor}</h5> : <h5>Author</h5>}
            {isActive === true ? (
              <BsCaretUpFill color={props.theme.textRgba} />
            ) : (
              <BsCaretDownFill color={props.theme.textRgba} />
            )}

            {isActive && (
              <DropdownMenu
                selected={selectedAutor}
                setSelected={setSelectedAutor}
                setIsActive={setIsActive}
              />
            )}
          </div> */}
            <div className="FilterContainer">
              <h5>Location</h5>
              <BsCaretDownFill color={this.props.theme.textRgba} />
            </div>
            <div className="FilterContainer">
              <h5>Created</h5>
              <BsCaretDownFill color={this.props.theme.textRgba} />
            </div>
          </FilterContainer>
        </Header>

        {/* {data && valueSearchName
          ? searchData(data)
          : // : data && selectedAutor
            // ? selectedAutorData(data)
            data && currentData(data)} */}
        {/* <GalleryImages
        data={valueSearchName ? searchData(data) : data}
        autor={props.autor}
        theme={props.theme}
      /> */}
        <MainBlock>
          {this.state.data &&
            this.state.data.map((i, index) => {
              return (
                <NameArt key={index}>
                  <img src={imageUrl + i.imageUrl} alt="" />
                  <div className="hide">
                    <h3>{i.name}</h3>
                    <span>
                      <h4>Author: </h4>
                      {this.state.autor.map((a) => {
                        if (a.id === i.authorId) {
                          return a.name;
                        }
                      })}
                    </span>
                    <span>
                      <h4>Created: </h4> {i.created}
                    </span>
                    <span>
                      <h4>Location: </h4>
                      {this.state.location.map((a) => {
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
            className={this.state.currentPage === 1 ? "first" : ""}
            style={{ borderRadius: "10px 0px 0px 10px" }}
          >
            <BsChevronDoubleLeft
              style={
                this.state.currentPage === 1
                  ? {
                      color: this.props.theme.textRgba
                    }
                  : { color: this.props.theme.text, cursor: "pointer" }
              }
            />
          </button>
          <button
            onClick={
              this.state.currentPage === 1
                ? null
                : () => handlePage(this.state.currentPage - 1)
            }
            className={this.state.currentPage === 1 ? "first" : ""}
          >
            <BsChevronLeft
              style={
                this.state.currentPage === 1
                  ? {
                      color: this.props.theme.textRgba
                    }
                  : { color: this.props.theme.text, cursor: "pointer" }
              }
            />
          </button>
          {renderPageNumbers}
          <button
            onClick={
              this.state.currentPage === maxPageNumberLimit
                ? null
                : () => handlePage(this.state.currentPage + 1)
            }
            className={this.state.currentPage === pageNumberLimit ? "last" : ""}
          >
            <BsChevronRight
              style={
                this.state.currentPage === pageNumberLimit
                  ? {
                      color: this.props.theme.textRgba
                    }
                  : { color: this.props.theme.text, cursor: "pointer" }
              }
            />
          </button>
          <button
            onClick={() => handlePage(pageNumberLimit)}
            className={this.state.currentPage === pageNumberLimit ? "last" : ""}
            style={{ borderRadius: "0px 10px 10px 0px" }}
          >
            <BsChevronDoubleRight
              style={
                this.state.currentPage === pageNumberLimit
                  ? {
                      color: this.props.theme.textRgba
                    }
                  : { color: this.props.theme.text, cursor: "pointer" }
              }
            />
          </button>
        </Paggination>
      </MainContainer>
    );
  }
}

export default MainContainer;

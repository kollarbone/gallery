import axios from "axios";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "./svg/logo";
import {
  BsSunFill,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsX
} from "react-icons/bs";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import GalleryImages from "./GalleryImages";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: [],
      location: [],
      currentPage: 1,
      data: [],
      valueSearchName: "",
      autorSearch: "",
      selectedAutor: "",
      isActiveA: false,
      isActiveL: false,
      selectedLocation: ""
    };
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
  onChangeHandler = (event) => {
    this.setState({ valueSearchName: event.target.value });
  };

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
        :active,
        :hover,
        :focus {
          outline: none;
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
    const DropdownMenuList = styled(motion.div)`
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
      ::-webkit-scrollbar {
        width: 15px;
      }
      ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.body};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.bodyRgba};
        border-radius: 10px;
        border: 3px solid ${(props) => props.theme.body};
      }
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
    const MainBlock = styled(motion.div)`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
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
    const onClickHandlerA = (e) => {
      this.setState({
        selectedAutor: e.target.id
      });
      this.state.autor.map((i) => {
        i.name === e.target.id &&
          axios
            .get(
              "https://test-front.framework.team/paintings?authorId=" + [i.id]
            )
            .then((response) => {
              this.setState({ data: response.data });
            });
      });
    };
    const onClickHandlerL = (e) => {
      this.setState({
        selectedLocation: e.target.id
      });
      this.state.location.map((i) => {
        i.location === e.target.id &&
          axios
            .get(
              "https://test-front.framework.team/paintings?locationId=" + [i.id]
            )
            .then((response) => {
              this.setState({ data: response.data });
            });
      });
    };
    const deleteFilterA = (id) => {
      this.setState({
        selectedAutor: null,
        isActiveA: false
      });
      axios
        .get(
          "https://test-front.framework.team/paintings?_limit=12&_page=" +
            [this.state.currentPage]
        )
        .then((response) => {
          this.setState({ data: response.data });
        });
    };
    const deleteFilterL = (id) => {
      this.setState({
        selectedLocation: null,
        isActiveL: false
      });
      axios
        .get(
          "https://test-front.framework.team/paintings?_limit=12&_page=" +
            [this.state.currentPage]
        )
        .then((response) => {
          this.setState({ data: response.data });
        });
      this.setState({
        selectedLocation: null
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
    const searchData = (data) => {
      const filteredCharacters = data.filter((i) => {
        return i.name
          .toLowerCase()
          .includes(this.state.valueSearchName.toLowerCase());
      });
      return filteredCharacters;
    };
    const DropdownMenu = (selected) => {
      return (
        <DropdownMenuList
          className="DropdownMenuList"
          initial={{ height: 0 }}
          animate={{ height: "55vh" }}
          transition={{ type: "spring", duration: 0.3 }}
        >
          {this.state[selected.name].map((autor) => {
            return (
              <List key={autor.id}>
                <span
                  id={selected.name === "autor" ? autor.name : autor.location}
                  key={selected.name}
                  onClick={
                    selected.name === "autor"
                      ? onClickHandlerA
                      : onClickHandlerL
                  }
                >
                  {selected.name === "autor" ? autor.name : autor.location}
                </span>
              </List>
            );
          })}
        </DropdownMenuList>
      );
    };

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
              // autoFocus="autoFocus"
              placeholder="Name"
              value={this.state.valueSearchName}
              onChange={this.onChangeHandler}
            />

            <div
              onClick={(e) =>
                this.setState({ isActiveA: !this.state.isActiveA })
              }
              className={
                this.state.isActiveA ? "openFilterContainer" : "FilterContainer"
              }
            >
              {this.state.selectedAutor ? (
                <h5>{this.state.selectedAutor}</h5>
              ) : (
                <h5>Author</h5>
              )}

              {this.state.isActiveA === true ? (
                <div style={{ zIndex: 10 }}>
                  {this.state.selectedAutor ? (
                    <BsX
                      color={this.props.theme.textRgba}
                      id="autor"
                      onClick={deleteFilterA}
                    />
                  ) : null}
                  <BsCaretUpFill color={this.props.theme.textRgba} />
                </div>
              ) : (
                <div style={{ zIndex: 10 }}>
                  {this.state.selectedAutor ? (
                    <BsX
                      color={this.props.theme.textRgba}
                      onClick={deleteFilterA}
                    />
                  ) : null}
                  <BsCaretDownFill color={this.props.theme.textRgba} />
                </div>
              )}

              {this.state.isActiveA && (
                <DropdownMenu
                  selected={this.state.selectedAutor}
                  setSelected={this.state.setSelectedAutor}
                  setIsActive={this.state.isActiveA}
                  name="autor"
                />
              )}
            </div>
            <div
              onClick={(e) =>
                this.setState({ isActiveL: !this.state.isActiveL })
              }
              className={
                this.state.isActiveL ? "openFilterContainer" : "FilterContainer"
              }
            >
              {this.state.selectedLocation ? (
                <h5>{this.state.selectedLocation}</h5>
              ) : (
                <h5>Location</h5>
              )}
              {this.state.isActiveL === true ? (
                <div>
                  {this.state.selectedLocation ? (
                    <BsX
                      color={this.props.theme.textRgba}
                      onClick={deleteFilterL}
                    />
                  ) : null}
                  <BsCaretUpFill color={this.props.theme.textRgba} />
                </div>
              ) : (
                <div>
                  {this.state.selectedLocation ? (
                    <BsX
                      color={this.props.theme.textRgba}
                      onClick={deleteFilterL}
                    />
                  ) : null}
                  <BsCaretDownFill color={this.props.theme.textRgba} />
                </div>
              )}

              {this.state.isActiveL && (
                <DropdownMenu
                  selected={this.state.selectedLocation}
                  setSelected={this.state.selectedLocation}
                  setIsActive={this.state.isActiveL}
                  name="location"
                />
              )}
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
        <MainBlock
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: 1
          }}
        >
          <GalleryImages
            data={
              this.state.valueSearchName
                ? searchData(this.state.data)
                : this.state.data
            }
            autor={this.state.autor}
            theme={this.props.theme}
            location={this.state.location}
          />
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

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
import {
  MainContainer,
  Header,
  LogoContainer,
  FilterContainer,
  DropdownMenuList,
  List,
  Paggination
} from "./StylesMain";

class MainContainerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: [],
      location: [],
      currentPage: 1,
      data: [],
      newData: [],
      valueSearchName: "",
      autorSearch: "",
      selectedAutor: "",
      isActiveA: false,
      isActiveL: false,
      selectedLocation: "",
      selectedData: { start: "", end: "" },
      isActiveC: false,
      link: "https://test-front.framework.team/"
    };
  }
  componentDidMount() {
    axios
      .get(
        [this.state.link] +
          "paintings?_limit=12&_page=" +
          [this.state.currentPage]
      )
      .then((response) => {
        this.setState({ data: response.data });
      });
    axios.get([this.state.link] + "authors").then((response) => {
      this.setState({ autor: response.data });
    });
    axios.get([this.state.link] + "locations").then((response) => {
      this.setState({ location: response.data });
    });
  }
  onChangeHandler = (event) => {
    this.setState({ valueSearchName: event.target.value });
  };
  onChangeHandlerDataStart = (event) => {
    const NewDate = {
      start: event.target.value,
      end: this.state.selectedData.end
    };
    this.setState({
      selectedData: NewDate
    });
    const newArr = [];
    this.state.data.map((i) => {
      if (i.created > event.target.value) {
        if (
          this.state.selectedData.end &&
          i.created < this.state.selectedData.end
        ) {
          return newArr.push(i);
        } else {
          return newArr.push(i);
        }
      }
      return null;
    });
    this.setState({ newData: newArr });
  };
  onChangeHandlerDataEnd = (event) => {
    event.preventDefault();
    const NewDate = {
      end: event.target.value,
      start: this.state.selectedData.start
    };
    this.setState({
      selectedData: NewDate
    });
    const newArr = [];
    this.state.data.map((i) => {
      if (
        i.created < event.target.value && this.state.selectedData.start
          ? i.created > this.state.selectedData.start
          : ""
      ) {
        return newArr.push(i);
      }
      return null;
    });
    this.setState({ newData: newArr });
  };
  render() {
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
        return this.state.data;
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
        return this.state.data;
      });
    };
    const deleteFilterA = (id) => {
      this.setState({
        selectedAutor: ""
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
    const deleteFilterC = (id) => {
      this.setState({
        selectedData: { start: "", end: "" },
        isActiveL: false
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
    const DropdownMenuData = (selected) => {
      return (
        <DropdownMenuList
          className="DropdownMenuList"
          initial={{ height: 0 }}
          animate={
            window.innerWidth < 1024 && window.innerWidth > 768
              ? { height: "20.5vh" }
              : { height: "10vh" }
          }
          transition={{ type: "spring", duration: 0.3 }}
        >
          <div className="inputs">
            <input
              placeholder="From"
              value={this.state.selectedData.start}
              onChange={this.onChangeHandlerDataStart}
            />
            <span>-</span>
            <input
              placeholder="Before"
              defaultValue={this.state.selectedData.end}
              onChange={this.onChangeHandlerDataEnd}
            />
          </div>
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
                <span>{this.state.selectedAutor}</span>
              ) : (
                <h5>Author</h5>
              )}
              {this.state.isActiveA === true ? (
                <div>
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
                <div>
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
                <span>{this.state.selectedLocation}</span>
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
            <div
              className={
                this.state.isActiveC ? "openFilterContainer" : "FilterContainer"
              }
            >
              {this.state.selectedData.start || this.state.selectedData.end ? (
                <h5
                  onClick={(e) =>
                    this.setState({ isActiveC: !this.state.isActiveC })
                  }
                >
                  {this.state.selectedData.start}-{this.state.selectedData.end}
                </h5>
              ) : (
                <h5
                  onClick={(e) =>
                    this.setState({ isActiveC: !this.state.isActiveC })
                  }
                >
                  Created
                </h5>
              )}
              {this.state.isActiveC === true ? (
                <div>
                  {this.state.selectedData.start ||
                  this.state.selectedData.end ? (
                    <BsX
                      color={this.props.theme.textRgba}
                      onClick={deleteFilterC}
                    />
                  ) : null}
                  <BsCaretUpFill color={this.props.theme.textRgba} />
                </div>
              ) : (
                <div>
                  {this.state.selectedData.start ||
                  this.state.selectedData.end ? (
                    <BsX
                      color={this.props.theme.textRgba}
                      onClick={deleteFilterC}
                    />
                  ) : null}
                  <BsCaretDownFill color={this.props.theme.textRgba} />
                </div>
              )}
              {this.state.isActiveC && DropdownMenuData()}
            </div>
          </FilterContainer>
        </Header>
        <MainBlock
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: 0.5
          }}
        >
          <GalleryImages
            data={
              this.state.selectedData.start || this.state.selectedData.end
                ? this.state.newData
                : this.state.valueSearchName
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

export default MainContainerClass;

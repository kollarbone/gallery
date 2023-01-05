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
import axios from "axios";
import GalleryImages from "./GalleryImages";

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
const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
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

const Main = (props) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [];
  for (let i = 1; i <= 6; i++) {
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
  const [autorSearch, setAutorSearch] = useState([]);
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

    // axios.get("https://test-front.framework.team/authors").then((response) => {
    //   setAutorSearch(response.data);
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const [valueSearchName, setValueSearchName] = useState("");
  // const [filteredCharacters, setFilteredCharacters] = useState("");
  const searchData = (data) => {
    const filteredCharacters = data.filter((i) => {
      return i.name.toLowerCase().includes(valueSearchName.toLowerCase());
    });
    return filteredCharacters;
  };
  // const [selectedAutor, setSelectedAutor] = useState("");
  // const [newData, setNewDFata] = useState(null);
  // const [id, setId] = useState("");
  // const selectedAutorData = () => {
  //   props.autor.autor.map((autorId) => {
  //     if (autorId.name === selectedAutor) {
  //       setId(autorId.id);
  //     }
  //   });
  // };
  // console.log(id, selectedAutor);
  // const locationSearch = props.autor.location;
  const [isActive, setIsActive] = useState(false);

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
          <input
            placeholder="Name"
            onChange={(event) => setValueSearchName(event.target.value)}
          />

          <div
            onClick={(e) => setIsActive(!isActive)}
            className={isActive ? "openFilterContainer" : "FilterContainer"}
          >
            {/* {selectedAutor ? <h5>{selectedAutor}</h5> : */}
            <h5>Author</h5>
            {isActive === true ? (
              <BsCaretUpFill color={props.theme.textRgba} />
            ) : (
              <BsCaretDownFill color={props.theme.textRgba} />
            )}

            {/* {isActive && (
              <DropdownMenu
                selected={selectedAutor}
                setSelected={setSelectedAutor}
                setIsActive={setIsActive}
              />
            )} */}
          </div>
          <div className="FilterContainer">
            <h5>Location</h5>
            <BsCaretDownFill color={props.theme.textRgba} />
          </div>
          <div className="FilterContainer">
            <h5>Created</h5>
            <BsCaretDownFill color={props.theme.textRgba} />
          </div>
        </FilterContainer>
      </Header>
      <MainBlock>
        {/* {data && valueSearchName
          ? searchData(data)
          : // : data && selectedAutor
            // ? selectedAutorData(data)
            data && currentData(data)} */}
        <GalleryImages
          data={valueSearchName ? searchData(data) : data}
          autor={props.autor}
        />
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
    </MainContainer>
  );
};
export default Main;

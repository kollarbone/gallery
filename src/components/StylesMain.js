import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
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
export const Header = styled.div`
  margin-top: 30px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  justify-content: center;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;
export const FilterContainer = styled.div`
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
    height: 15px;
    flex-wrap: nowrap;
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
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      font-size: 13px;
      color: ${(props) => props.theme.text};
    }
    div {
      display: flex;
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
export const Paggination = styled.div`
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
export const DropdownMenuList = styled(motion.div)`
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

  .inputs {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    margin-top: 20px;
    margin: 10px;
    @media (max-width: 1024px) and (min-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    input {
      border: none;
      background: ${(props) => props.theme.input};
      max-width: 100px;
      min-width: 90px;
    }
    span {
      color: ${(props) => props.theme.text};
    }
  }
`;
export const List = styled.div`
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease-in-out;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-left: 30px;
  }
`;
export const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
export const NameArt = styled.div`
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

import Main from "./Main";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

class MainContainer extends React.Component {
  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://test-front.framework.team/paintings?_limit=12&_page=" +
  //         [this.state.currentPage]
  //     )
  //     .then((response) => {
  //       this.setState({ data: response.data });
  //     });
  //   axios.get("https://test-front.framework.team/authors").then((response) => {
  //     this.setState({ autor: response.data });
  //   });
  //   axios
  //     .get("https://test-front.framework.team/locations")
  //     .then((response) => {
  //       this.setState({ location: response.data });
  //     });
  // }

  render() {
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

    const imageUrl = "https://test-front.framework.team";

    return (
      <MainBlock>
        {this.props.data.map((i, index) => {
          return (
            <NameArt key={index}>
              <img src={imageUrl + i.imageUrl} alt="" />
              <div className="hide">
                <h3>{i.name}</h3>
                <span>
                  <h4>Author: </h4>
                  {this.props.autor.map((a) => {
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
                  {this.props.location.map((a) => {
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
    );
  }
}

export default MainContainer;

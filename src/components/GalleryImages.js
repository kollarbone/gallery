import React from "react";
import styled from "styled-components";
import { MainBlock, NameArt } from "./StylesMain";

class MainContainer extends React.Component {
  render() {
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
                    return null;
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
                    return null;
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

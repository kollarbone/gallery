import Main from "./Main";
import React from "react";
import axios from "axios";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { autor: [], location: [] };
  }
  componentDidMount() {
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
    return (
      <Main
        autor={this.state}
        toggleTheme={this.props.toggleTheme}
        theme={this.props.theme}
      />
    );
  }
}

export default MainContainer;

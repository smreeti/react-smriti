import React from "react";
import Conditional from "./Conditional";

class ConditionalRendering extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      character: {}
    };
  }

  componentDidMount() {
  
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          character: data
        });
      });
  }

  render() {
    return (
      <div>{this.state.isLoading ? "loading" : this.state.character.name}</div>
    );
  }
}

export default ConditionalRendering;

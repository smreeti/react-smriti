import React from "react";
import Conditional from "./Conditional";

class ConditionalRendering extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      character: {}
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>{this.state.isLoading ? "loading" : "Conditional Rendering Tested" }</div>
    );
  }
}

export default ConditionalRendering;

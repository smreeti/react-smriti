import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return (
      <div>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</div>
    );
  }
}

export default ClassComponent;

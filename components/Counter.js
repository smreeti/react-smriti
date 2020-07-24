import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Count : {this.state.count}</h1>
        <button onClick={this.handleClick}> Click </button>
      </div>
    );
  }
}

export default Counter;

import React from "react";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: null,
      updatedList: []
    };
  }

  render() {
    return <AddToDoItem />;
  }
}

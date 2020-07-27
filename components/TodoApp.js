import React from "react";
import AddToDoItem from "./AddToDoItem";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodo: null,
      todoList: []
    };
  }

  handleChange(todoItem) {
    console.log("Todo Item :::" + todoItem);
    this.setState({
      currentTodo: todoItem
    });
  }

  handleClick(todoItem) {
    console.log("Todo Item Added :::" + todoItem);

    this.setState({
      todoList: [...this.state.todoList, todoItem]
    });
  }

  handleCheckboxChange = e => {
    e.target.classList.toggle("strikeThrough");
  };

  handleRemove = index => {
    const todoList = this.state.todoList;

    for (let i = 0; i <= todoList.length; i++) {
      if (i == index) {
        todoList.splice(index, 1);
      }
    }

    this.setState({
      todoList: todoList
    });
  };

  render() {
    return (
      <div>
        <AddToDoItem />
        <input
          type="text"
          onChange={event => {
            this.handleChange(event.target.value);
          }}
        />
        <button onClick={() => this.handleClick(this.state.currentTodo)}>
          Save{" "}
        </button>

        <div>
          <p>To Do Items</p>
          {this.state.todoList.map((item, index) => (
            <div>
              <p key={index} onClick={this.handleCheckboxChange}>
                {item}{" "}
              </p>

              <button onClick={() => this.handleRemove(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;

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

          {this.state.todoList.map((todo, index) => (
            <p key={index}> {todo} </p>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;

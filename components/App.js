import React from "react";
import ToDoItems from "./ToDoItems";
import toDoItemsData from "./toDoItemsData";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: toDoItemsData
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(previousState => {
      const updatedToDos = previousState.todos.map(todo => {
        if (todo.id === id) 
          todo.isChecked = !todo.isChecked;
  
        return todo;
      });

      return {
        todos: updatedToDos
      };
      
    });
  }

  render() {
    console.log("items" + toDoItemsData);
    const todoList = this.state.todos.map(todo => (
      <ToDoItems key={todo.id} todo={todo} handleChange={this.handleChange} />
    ));

    return <div>{todoList}</div>;
  }
}

export default App;

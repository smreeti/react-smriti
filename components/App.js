import React from "react";
import ToDoItems from "./ToDoItems";
import toDoItemsData from "./toDoItemsData";

// function App() {

//   console.log("todo data::::" + toDoItemsData)
//   const toDoList = toDoItemsData.map(todo => <ToDoItems key = {todo.id} task={todo.task} />);
//   return <div>{toDoList}</div>;
// }

class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
      todos: toDoItemsData
    };
  }

  render() {
    const toDoList = this.state.todos.map(todo => <ToDoItems task={todo.task} />);

    return <div>{toDoList}</div>;
  }
}

export default App;

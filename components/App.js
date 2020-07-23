import React from "react";
import ToDoItems from "./ToDoItems";
import toDoItemsData from "./toDoItemsData";

function App() {
  const toDoList = toDoItemsData.map(todo => <ToDoItems task={todo.task} />);
  return <div>{toDoList}</div>;
}

export default App;

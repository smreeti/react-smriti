import React from "react";
import style from "./style.css";

function ToDoItems(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.todo.isChecked}
        onChange={() => props.handleChange(props.todo.id)}
      />
        {props.todo.task}
    </div>
  );
}

export default ToDoItems;

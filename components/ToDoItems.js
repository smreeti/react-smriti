import React from "react";

function ToDoItems(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.todo.isChecked}
        className={props.todo.isChecked ? "completed" : ""}
        onChange={event => props.handleChange(props.todo.id)}
      />
      {props.todo.task}

    </div>
    
  );
}

export default ToDoItems;

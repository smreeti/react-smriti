import React from "react";

function ToDoItems(props) {
  console.log("props:::::" +props.task);
  return (
    <div>
      <input type="checkbox" /> {props.task}
    </div>
  );
}

export default ToDoItems;

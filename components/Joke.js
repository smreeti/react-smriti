import React from "react";

function Joke(props) {
  console.log(props)
  return (
    <div>
      {props.question} : {props.punchLine}
    </div>
  );
}

export default Joke;
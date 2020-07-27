import React from "react";

function Conditional(props) {
  console.log(props.isLoading);
  return (
    <div>
      {props.isLoading ? (
        <h1> Loading ...</h1>
      ) : (
        <h1> Conditional rendering tested </h1>
      )}
    </div>
  );
}

export default Conditional;

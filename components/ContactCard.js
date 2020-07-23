import React from "react";

function ContactCard(props) {
  console.log(props);
  return (
    <div>
      <div>
        {props.name} {props.description}
      </div>
    </div>
  );
}

export default ContactCard;

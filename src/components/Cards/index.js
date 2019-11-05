import React from "react";

import "./style.css";


function Cards(props) {
  return (
      <div role="img" aria-label="click item" className="click-item" id={props.name} onClick={() => props.clicky(props.id)}></div>
  )
}

export default Cards;

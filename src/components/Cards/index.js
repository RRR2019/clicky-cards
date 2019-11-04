import React from "react";

import "./style.css";


function Cards(props) {
  return (
      <div role="img" aria-label="click item" className="click-item" id={props.name}></div>
  )
}

export default Cards;

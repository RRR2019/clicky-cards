import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#" id="clicky">Clicky-Game</a>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" id="score">Score: {props.score}<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="topScore">Top Score: {props.topScore}</a>
        </li>
        
      </ul>
    </div>
  </nav>
)
}

export default Navbar;

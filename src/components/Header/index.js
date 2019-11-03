import React from "react";
import "./style.css";

function Header() {
  return(
    <div className="jumbotron">
    <h1 className="display-4 d-flex justify-content-center" id="title">The Office Clicky Game!</h1>
    <hr className="my-4"/>
    <p className="d-flex justify-content-center" id="sub">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
  )
}

export default Header;

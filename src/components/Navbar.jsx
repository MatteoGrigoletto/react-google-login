import React from "react";
import "./NavBar.scss";

function navBar() {
  return (
    <div className="navbar">
      <span className="logo">App</span>
      <ul className="list">
        <li className="list_item">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
            className="avatar"
          />
        </li>
        <li className="list_item">Matteo Grigoletto</li>
        <li className="list_item">Esci</li>
      </ul>
    </div>
  );
}

export default navBar;

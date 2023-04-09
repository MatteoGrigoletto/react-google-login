import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ user }) {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          app
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="list_item">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
              className="avatar"
            />
          </li>
          <li className="list_item">Matteo Grigoletto</li>
          <li className="list_item">
            <Link to="/login">Esci</Link>
          </li>
        </ul>
      ) : (
        <Link to="/login">Accedi</Link>
      )}
    </div>
  );
}

export default NavBar;

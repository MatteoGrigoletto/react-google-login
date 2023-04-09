import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ user }) {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          HOME
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="list_item">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="list_item">{user.displayName}</li>

          <li className="list_item" onClick={logout}>
            Esci
          </li>
        </ul>
      ) : (
        <ul className="login">
          <li>
            <Link className="login_link" to="/login">
              Accedi
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;

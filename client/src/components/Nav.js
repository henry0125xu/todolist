import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth";

const Nav = ({ currentUser, setCurrentUser }) => {
  const logoutHandler = () => {
    window.google.accounts.id.disableAutoSelect();
    AuthService.logout();
    setCurrentUser(AuthService.getCurrentUser());
    //alert("Logout succeed~");
  };

  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        {!currentUser && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {currentUser && (
          <li>
            <Link to="/home" onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;

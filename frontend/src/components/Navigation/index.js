import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="navbar-links">
          Log In
        </NavLink>
        <NavLink to="/signup" className="navbar-links">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" className="navbar-links">
            Home
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

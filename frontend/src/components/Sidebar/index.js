import Navigation from "../Navigation"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { setMemories } from "../../store/memories";
import * as sessionActions from "../../store/session";

import "./Sidebar.css";

const Sidebar = ({isLoaded}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);


    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
      history.push("/");
    };

    return (
      <div className="sidebar-container">
        <div className="sidebar-username">{sessionUser.username}</div>
        <NavLink to="/memoryForm">
          <button>Record Memory</button>
        </NavLink>
        <button onClick={logout}>Log Out</button>
        {/* <Navigation isLoaded={isLoaded} /> */}
      </div>
    );
}

export default Sidebar;
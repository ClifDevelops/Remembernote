import Navigation from "../Navigation"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { unsetMemories } from "../../store/memories";
import * as sessionActions from "../../store/session";

import "./Sidebar.css";

const Sidebar = ({isLoaded}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);


    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
      dispatch(unsetMemories());
      history.push("/");
    };

    return (
      <div className="sidebar-container">
        <div className="sidebar-username">{sessionUser.username}</div>
        <NavLink to="/memoryForm">
          <button className="sidebar-button">Record Memory</button>
        </NavLink>
        <button onClick={logout} className="sidebar-button">
          Log Out
        </button>
        {/* <Navigation isLoaded={isLoaded} /> */}
      </div>
    );
}

export default Sidebar;
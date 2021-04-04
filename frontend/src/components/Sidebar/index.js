import Navigation from "../Navigation"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { setMemories } from "../../store/memories";

import "./Sidebar.css";

const Sidebar = ({isLoaded}) => {
    const sessionUser = useSelector((state) => state.session.user);

    return (
      <div className="sidebar-container">
        <div className="sidebar-username">{sessionUser.username}</div>
        <NavLink to="/memoryForm">
          <button>Record Memory</button>
        </NavLink>
        <Navigation isLoaded={isLoaded} />
      </div>
    );
}

export default Sidebar;
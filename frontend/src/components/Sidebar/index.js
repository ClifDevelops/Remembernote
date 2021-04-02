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
        <h2>Nice to see you {sessionUser.username}</h2>
        <NavLink to="/memoryForm">
          <button>Record Memory</button>
        </NavLink>
        
        <button>Display Memories</button>
        <button>Home</button>
        <Navigation isLoaded={isLoaded} />
      </div>
    );
}

export default Sidebar;
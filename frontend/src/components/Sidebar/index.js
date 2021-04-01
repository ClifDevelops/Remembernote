import Navigation from "../Navigation"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setMemories } from "../../store/memories";
import "./Sidebar.css";

const Sidebar = () => {
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div className="sidebar-container">
            <h2>Nice to see you {sessionUser.username}</h2>
            <button>Record Memory</button>
            <button>Display Memories</button>
            <button>Home</button>

        </div>
    )
}

export default Sidebar;
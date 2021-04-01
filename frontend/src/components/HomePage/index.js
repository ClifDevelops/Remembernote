import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setMemories } from "../../store/memories";
import Sidebar from "../Sidebar"
import MemoryList from "../MemoryList"
import "./HomePage.css";

const Homepage = () => {


    return (
        <div className="homepage-container">
            <Sidebar className="sidebar" />
            <MemoryList className="mem-list" />
        </div>
    )
}

export default Homepage;
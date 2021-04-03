import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Route, Redirect } from "react-router-dom";
import { setMemories } from "../../store/memories";
import Sidebar from "../Sidebar"
import MemoryList from "../MemoryList"
import MemoryForm from "../MemoryForm"
import "./HomePage.css";

const Homepage = ({isLoaded}) => {
const sessionUser = useSelector((state) => state.session.user);
if (!sessionUser) return <Redirect to="/" />; 

    return (
      <div className="homepage-container">
        <Sidebar className="sidebar" isLoaded={isLoaded} />
        <MemoryList className="mem-list" />
        {/* <MemoryForm className="form" /> */}
      </div>
    );
}

export default Homepage;
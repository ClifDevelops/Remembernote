import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink, Link } from "react-router-dom";
import "./MemoryBox.css";

function MemoryBox(memory) {
    // console.log(memory.memory.id)


    return (
        <div className="memory-box-container">
            <NavLink to={`/memories/${memory.memory.id}`}>
                <div className="memory-box-title">{memory.memory.title}</div>
            </NavLink>
            <div className="memory-box-location">{memory.memory.location}</div>
            <div className="memory-box-date">{memory.memory.dateOfMemory}</div>
        </div>
    )

}

export default MemoryBox;
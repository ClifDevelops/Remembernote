import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./MemoryBox.css";

function MemoryBox() {

    return (
        <div className="memory-box-container">
            <div className="memory-box-title">{memory.title}</div>
            <div className="memory-box-location">{memory.location}</div>
            <div className="memory-box-date">{memory.dateOfMemory}</div>
        </div>
    )

}

export default MemoryBox;
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import "./MemoryDisplay.css"




const MemoryDisplay = () => {
    const {memoryId} = useParams();
    const memory = useSelector(state => state.memories[memoryId]);
    const dispatch = useDispatch();
    const history= useHistory();

     const headHome = () => {
       history.push("/homepage");
     };

    // useEffect(() => {
    //     dispatch(getOneMemory(memoryId));
    // }, [dispatch])
    if(!memory) history.push("/homepage")

    return (
      <div className="memory-display">
        <button className="to-home-button" onClick={headHome}>
          Head Back Home
        </button>
        <div className="memory-display-title">{memory?.title}</div>
        <div className="memory-display-date">{memory?.dateOfMemory}</div>
        <div className="memory-display-location">{memory?.location}</div>
        <div className="memory-display-rating">
          Memory Rating: {memory?.memoryRating}
        </div>
        <div className="memory-display-body">{memory?.body}</div>
      </div>
    );
}

export default MemoryDisplay;
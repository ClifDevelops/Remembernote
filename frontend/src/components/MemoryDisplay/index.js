import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';




const MemoryDisplay = () => {
    const {memoryId} = useParams();
    const memory = useSelector(state => state.memories[memoryId]);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getOneMemory(memoryId));
    // }, [dispatch])


    return (
      <div className="memory-display-container">
        <div className="memory-display-title">{memory.title}</div>
        <div className="memory-display-date">{memory.dateOfMemory}</div>
        <div className="memory-display-location">{memory.location}</div>
        <div className="memory-display-rating">{memory.memoryRating}</div>
        <div className="memory-display-body">{memory.body}</div>
      </div>
    );
}

export default MemoryDisplay;
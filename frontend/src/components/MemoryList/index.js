import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink} from "react-router-dom";
import { setMemories } from "../../store/memories";
import MemoryBox from "../MemoryBox"
import "./MemoryList.css";

const MemoryList = () => {
  const dispatch = useDispatch();
  const memories = useSelector(state => Object.values(state?.memories));
  
  // console.log("memories", memories)
  useEffect(() => {
    dispatch(setMemories());
  }, [dispatch]);

  if (!memories) {
    return null;
  }

  return (
    <div className="memory-list-container">
      {memories?.map((memory) => {
        return (
          <MemoryBox key={memory.id} memory={memory} />
          // <div className="single-memory-container">
          //   <h2 className="memory-title">{memory?.title}</h2>
          //   <div>{memory?.dateOfMemory}</div>
          //   <div>{memory?.memoryRating}</div>
          //   <div>{memory?.body}</div>
          // </div>
        );
      })}
      
    
    </div>
  );
};

export default MemoryList;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./MemoryForm.css";



const MemoryForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [dateOfMemory, setDateOfMemory] = useState("");
    const [location, setLocation] = useState("");
    const [memoryRating, setMemoryRating] = useState(5);
    const [body, setBody] = useState("");
    //need a userId... how do I grab that?
    const updateTitle = (e) => setTitle(e.target.value);
    const updateDateOfMemory = (e) => setDateOfMemory(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateMemoryRating = (e) => setMemoryRating(e.target.value);
    const updateBody = (e) => setBody(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            dateOfMemory,
            location,
            memoryRating,
            body
        }

        
    }

    return (
      <section className="memory-form-container">
        <form onSubmit={handleSubmit} id="memory-form" className="memory-form">
          <input
            type="text"
            placeholder="Title of Memory"
            value={title}
            onChange={updateTitle}
            className="memory-input"
          />
          <input
            type="text"
            placeholder="Date of Memory ex: 2021-12-21"
            required
            pattern="([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))"
            value={dateOfMemory}
            onChange={updateDateOfMemory}
            className="memory-input"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={updateLocation}
            className="memory-input"
          />
          <input
            type="number"
            placeholder="Memory Rating"
            min="1"
            max="10"
            value={memoryRating}
            onChange={updateMemoryRating}
            className="memory-input"
          />
          <textarea
            form="memory-form"
            placeholder="Record your memory!"
            className="memory-form-textbox"
          />
          <button type="submit">Store your memory!</button>
        </form>
      </section>
    );

}

export default MemoryForm;
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";



const MemoryForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [dateOfMemory, setDateOfMemory] = useState();
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

}

export default MemoryForm;
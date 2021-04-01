import { csrfFetch } from "./csrf";

const SET_MEMORY = "memory/GET";
const ADD_MEMORY = "memory/ADD";
const SET_MEMORIES = "memories/SET"
//ACTIONS
const setMemory = (memory) => ({
  type: SET_MEMORY,
  payload: memory,
});

const load = (memories) => ({
    type: SET_MEMORIES,
    payload: memories
});

const addMemory = (memory) => ({
    type: ADD_MEMORY,
    payload: memory,
});
//THUNKS (Async Actions)
export const setOneMemory = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/memories/${id}`);
  if (!response.ok) {
      throw response;
  }
    const memory = await response.json();
    dispatch(setMemory(memory));
  
};

export const setMemories = () => async dispatch => {
    const response = await csrfFetch(`/api/memories`);
    if (!response.ok) {
      throw response;
    }
    const memories = await response.json();
    dispatch(load(memories));
}

const initialState = {};
//REDUCERS
const memoriesReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type) {
        case SET_MEMORY:
            return
        case ADD_MEMORY:
            return
        case SET_MEMORIES:
            action.payload.forEach((memory) => {
                newState[memory.id] = memory;
            });
            return newState;
            
        
        default:
            return state;
    }
}

export default memoriesReducer;
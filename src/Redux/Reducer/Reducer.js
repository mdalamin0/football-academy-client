import { GET_CLASSES_FAILED, GET_CLASSES_REQUEST, GET_CLASSES_SUCCESS, GET_INSTRUCTOR_FAILED, GET_INSTRUCTOR_REQUEST, GET_INSTRUCTOR_SUCCESS } from "../ActionTypes/ActionTypes";

// classes initial state
const initialClassesState = {
  isLoading: false,
  classes: [],
  error: null
};

// instructor initial state
const initialInstructorState = {
  isLoading: false,
  instructors: [],
  error: null
};

// classes reducer

export const classesReducer = (state=initialClassesState, action) => {
  switch (action.type) {
    case GET_CLASSES_REQUEST:
      
      return {
        ...state,
        isLoading: true
      }
    case GET_CLASSES_SUCCESS:
      
      return {
        isLoading: false,
        classes: action.payload,
        error: null
      }
    case GET_CLASSES_FAILED:
      
      return {
        isLoading: false,
        classes: [],
        error: action.payload
      }
  
    default:
      return state;
  }
};

// instructor reducer
export const instructorReducer = (state=initialInstructorState, action) => {
  switch (action.type) {
    case GET_INSTRUCTOR_REQUEST:
      
      return {
        ...state,
        isLoading: true
      }
    case GET_INSTRUCTOR_SUCCESS:
      
      return {
        isLoading: false,
        instructors: action.payload,
        error: null
      }
    case GET_INSTRUCTOR_FAILED:
      
      return {
        isLoading: false,
        instructors: [],
        error: action.payload
      }
  
    default:
      return state;
  }
}
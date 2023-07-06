import axios from "axios";
import {
  GET_CLASSES_FAILED,
  GET_CLASSES_REQUEST,
  GET_CLASSES_SUCCESS,
  GET_INSTRUCTOR_FAILED,
  GET_INSTRUCTOR_REQUEST,
  GET_INSTRUCTOR_SUCCESS,
  POST_CLASSES_FAILED,
  POST_CLASSES_REQUEST,
  POST_CLASSES_SUCCESS,
} from "../ActionTypes/ActionTypes";

// get all classes action

export const getAllClassesAction = () => async (dispatch) => {
  dispatch({ type: GET_CLASSES_REQUEST });
  try {
    const res = await axios.get(
      "https://shippo-football-academy-server-mdalamin0.vercel.app/classes"
    );
    dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({type: GET_CLASSES_FAILED, payload: error.message})
  }
};

// add class action
export const addClassesAction = (newClass, cb ) => async (dispatch) => {
  dispatch({ type: POST_CLASSES_REQUEST });
  try {
    const res = await axios.post(
      "https://shippo-football-academy-server-mdalamin0.vercel.app/addClass", newClass
    );
    cb(res.data)
    dispatch({ type: POST_CLASSES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({type: POST_CLASSES_FAILED, payload: error.message})
  }
};

// get all instructor action

export const getAllInstructorAction = () => async (dispatch) => {
  dispatch({ type: GET_INSTRUCTOR_REQUEST });
  try {
    const res = await axios.get(
      "https://shippo-football-academy-server-mdalamin0.vercel.app/allInstructors"
    );
    dispatch({ type: GET_INSTRUCTOR_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({type: GET_INSTRUCTOR_FAILED, payload: error.message})
  }
};


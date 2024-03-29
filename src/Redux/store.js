import { applyMiddleware, combineReducers, createStore } from "redux";
import { classesReducer, instructorReducer } from "./Reducer/Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  classesReducer: classesReducer,
  instructorReducer: instructorReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
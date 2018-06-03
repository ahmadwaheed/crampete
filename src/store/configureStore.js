import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authtenticateReducer from "./reducers/authenticate_reducer";
import coursesReducer from "./reducers/courses_reducer";


const rootReducer = combineReducers({
  authenticate: authtenticateReducer,
  courses: coursesReducer
});

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;

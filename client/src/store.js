import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/loginReducer";
import recipeReducer from "./reducers/recipeReducer";
const reducer = combineReducers({
  user: userReducer,
  recipes: recipeReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
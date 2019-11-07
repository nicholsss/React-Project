import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducer from "./reducers/userReducer";
import recipeReducer from "./reducers/recipeReducer";
import loginReducer from "./reducers/loginReducer";
const reducer = combineReducers({
  users: userReducer,
  user:loginReducer,
  recipes: recipeReducer,
  
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store;
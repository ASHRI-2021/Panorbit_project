import { combineReducers } from "redux";
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  chatState: chatReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import { errorReducer, formReducer } from "./formReducer";

export const rootReducer = combineReducers({
  form: formReducer,
  error: errorReducer,
});

export default rootReducer;

import dataReducer from "./dataReducer";
import { combineReducers } from "redux";

export default combineReducers({
  data: dataReducer
});

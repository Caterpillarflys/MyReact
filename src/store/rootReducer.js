import { combineReducers } from "redux";
import { counterReducer as module1Reducer } from "./list/index";
const rootReducer = combineReducers({
  module1: module1Reducer,
});
export default rootReducer;

import daoReducer from "./daoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dao: daoReducer,
});

export default rootReducer;

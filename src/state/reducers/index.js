import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

// all reducers combined
const reducers = combineReducers({
    account: accountReducer
});

export default reducers
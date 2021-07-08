import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import taskReducer from "./reducer/taskReducer";
import logger from "redux-logger";

const store = createStore(combineReducers({userReducer, productReducer, taskReducer}), applyMiddleware(logger));

export default store
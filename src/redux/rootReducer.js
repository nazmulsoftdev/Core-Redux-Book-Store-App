import { combineReducers } from "redux";
import bookReducer from "./book/bookReducer";
import filterBookReducer from "./filter/filterReducer";


const rootReducer = combineReducers({ books: bookReducer, filterBook: filterBookReducer });

export default rootReducer;
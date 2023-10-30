import { combineReducers } from "redux";
import authReducer from "./authReducer";
import popularMovieReducer from "./popularMovieReducer";
import searchReducers from "./searchReducers";

// It will be make the reducers to be one temporary state database
// Reducer is like table in database
// And here, we will list all the table into one database
export default combineReducers({
  auth: authReducer,
  popular: popularMovieReducer,
search: searchReducers,

});

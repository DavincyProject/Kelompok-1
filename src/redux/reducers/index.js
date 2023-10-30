import { combineReducers } from "redux";
import authReducer from "./authReducer";
import popularMovieReducer from "./popularMovieReducer";
import searchReducers from "./searchReducers";
import profileReducers from "./profileReducers";
import detailsReducers from "./detailsReducers";

// It will be make the reducers to be one temporary state database
// Reducer is like table in database
// And here, we will list all the table into one database
export default combineReducers({
  popular: popularMovieReducer,
  search: searchReducers,
  profil: profileReducers,
  detail: detailsReducers,
  auth: authReducer,
});

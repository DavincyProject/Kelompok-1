import { combineReducers } from "redux";
import popularMovieReducer from "./popularMovieReducer";
import searchReducers from "./searchReducers";
import profileReducers from "./profileReducers";

export default combineReducers({
  popular: popularMovieReducer,
  search: searchReducers,
  profil: profileReducers,
});

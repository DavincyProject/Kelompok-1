import { combineReducers } from "redux";
import popularMovieReducer from "./popularMovieReducer";
import searchReducers from "./searchReducers";
import profileReducers from "./profileReducers";
import detailsReducers from "./detailsReducers";

export default combineReducers({
  popular: popularMovieReducer,
  search: searchReducers,
  profil: profileReducers,
  detail: detailsReducers,
});

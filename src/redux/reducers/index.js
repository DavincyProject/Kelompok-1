import { combineReducers } from "redux";
import popularMovieReducer from "./popularMovieReducer";

export default combineReducers({
  popular: popularMovieReducer,
});

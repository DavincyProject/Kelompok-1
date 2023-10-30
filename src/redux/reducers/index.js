import { combineReducers } from "redux";
import popularMovieReducer from "./popularMovieReducer";
import searchReducers from "./searchReducers";
<<<<<<< HEAD

export default combineReducers({
    popular: popularMovieReducer,
    search: searchReducers,
=======
import profileReducers from "./profileReducers";
import detailsReducers from "./detailsReducers";

export default combineReducers({
  popular: popularMovieReducer,
  search: searchReducers,
  profil: profileReducers,
  detail: detailsReducers,
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
});

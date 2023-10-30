import { combineReducers } from "redux";
import authReducer from "./authReducer";
import popularMovieReducer from "./popularMovieReducer";
import searchReducers from "./searchReducers";
<<<<<<< HEAD

// It will be make the reducers to be one temporary state database
// Reducer is like table in database
// And here, we will list all the table into one database
export default combineReducers({
<<<<<<< HEAD
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
=======
  auth: authReducer,
  popular: popularMovieReducer,
search: searchReducers,

>>>>>>> f1bbc58e4ccf69a06f087a1e56b45d659c580abc
});

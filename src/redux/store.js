import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
=======
import thunk from "redux-thunk";
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
import rootReducers from "./reducers";
import searchReducers from "./reducers/searchReducers";

export default configureStore({
<<<<<<< HEAD
    reducer: rootReducers,
    search: searchReducers,
    devTools: import.meta.env.MODE === "development",
=======
  reducer: rootReducers,
  search: searchReducers,
  devTools: import.meta.env.MODE === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
});

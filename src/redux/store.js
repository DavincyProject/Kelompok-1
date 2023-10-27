import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

// Membuat database penyimpanan atau status sementara
export default configureStore({
  reducer: rootReducers,
  devTools: import.meta.env.MODE === "development",
});

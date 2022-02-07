import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

//* Store
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //! For multiple reducers
});

//* export
export default store;

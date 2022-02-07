// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

//* initialCounterState
const initialCounterState = { counter: 0, showCounter: true };

//* counterSlice
const counterSlice = createSlice({
  name: "counter",
  initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseAmount(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//* initialAuthState
const initialAuthState = { isAuthenticated: false };

//* authSlice
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//* Store
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  // reducer: counterSlice.reducer, //! For a single reducer
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //! For multiple reducers
});

//* export
export const counterActions = counterSlice.actions; // containing 'increment', 'decrement', 'increaseAmount', 'toggle' with auto-generated unique identifier.
export const authActions = authSlice.actions; // 'login', 'logout'
export default store;

// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

//* initialState
const initialState = { counter: 0, showCounter: true };

//* createSlice
const counterSlice = createSlice({
  name: "counter",
  initialState,
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

//* Store
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: counterSlice.reducer, //! For a single reducer
  // reducer: { counter: counterSlice.reducer }, //! For multiple reducers
});

//* export
export const counterActions = counterSlice.actions; // containing 'increment', 'decrement', 'increaseAmount', 'toggle' with auto-generated unique identifier.
export default store;

import { createSlice } from "@reduxjs/toolkit";

//* initialCounterState
const initialCounterState = { counter: 0, showCounter: true };

//* counterSlice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

//* export
export const counterActions = counterSlice.actions; // 'increment', 'decrement', 'increaseAmount', 'toggle' with auto-generated unique identifier.
export default counterSlice.reducer;

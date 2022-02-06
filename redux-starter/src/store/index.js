import { createStore } from "redux";

//* initialState
const initialState = { counter: 0, showCounter: true };

//* Reducer
const counterReducer = (state = initialState, action) => {
  // increment
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  // incrementAction
  if (action.type === "incrementAction") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  // decrement
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  // toggle
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  // default
  return state;
};

//* Store
const store = createStore(counterReducer);

//* export
export default store;

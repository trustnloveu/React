const { createStore } = require("redux");

//* Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  // increment
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  // decrement
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  // default
  return state;
};

//* Store
const store = createStore(counterReducer);

//* export
export default store;

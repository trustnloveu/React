const redux = require("redux");

//* 'Reducer Function'
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

//* 'Store' to manage data
const store = redux.createStore(counterReducer);

//* 'Subscription'
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//* 'Subscribe'
store.subscribe(counterSubscriber);

//* 'dispatch'
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

const redux = require("redux");

//* 'Reducer Function'
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
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

import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreator";

// subscribe(callback)
// It's called every time the state of the store get changed
const unsubscribe = store.subscribe(() => {
  console.log("Store has chagned.", store.getState());
});

// dispatch(), getState(), replaceReducer(), Symbol(obervable)
console.log("Initial State: ", store); // > []: empty array of state

store.dispatch(bugAdded("Bug 1")); // [{...}]: added
store.dispatch(bugResolved(1));

// unsubscribe(); // you're not going to get notified from this time on wiht this function

store.dispatch(bugRemoved()); // []: removed

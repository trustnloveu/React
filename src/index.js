// import { produce } from "immer";
import store from "./store";

// subscribe(callback)
// It's called every time the state of the store get changed
const unsubscribe = store.subscribe(() => {
  console.log("Store has chagned.", store.getState());
});

// dispatch(), getState(), replaceReducer(), Symbol(obervable)
console.log("Initial State: ", store); // > []: empty array of state

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug 1",
  },
}); // [{...}]: added

// unsubscribe(); // you're not going to get notified from this time on wiht this function

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
}); // []: removed

import store from "./customStore";
import * as actions from "./actionCreator";

store.subscribe(() => {
  console.log("Store has changed.");
});

store.dispatch(actions.bugAdded("Bug 1"));

console.log(store.getState());

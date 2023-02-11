import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  // Call an API
  // when the promise is resolved => dispatch()
  dispatch({ type: "bugReceived", bugs: [1, 2, 3] }); // store.dispatch > dispatch
  console.log(getState());
  // if the promise is rejected => dispatch()
});

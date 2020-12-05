import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import * as projectActions from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("Store has changed.");
});

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
store.dispatch(actions.bugResolved({ id: 1 }));

store.dispatch(projectActions.projectAdded({ name: "Project A" }));
store.dispatch(projectActions.projectAdded({ name: "Project B" }));
store.dispatch(projectActions.projectAdded({ name: "Project C" }));

console.log(store.getState());

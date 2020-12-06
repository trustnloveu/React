import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("Store has changed.");
});

// dispatch bug
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
const unresolvedBugs1 = getUnresolvedBugs(store.getState());
console.log(store.getState());
console.log(unresolvedBugs === unresolvedBugs1);

// dispatch project
store.dispatch(projectAdded({ name: "Project A" }));

// const unresolvedBugs = store
// .getState()
// .entities.bugs.filter((bug) => !bug.bugResolved);

import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.subscribe(() => {
  console.log("Store has changed.");
});

// dispatch bug
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
const unresolvedBugs1 = getUnresolvedBugs(store.getState());
console.log(store.getState());
console.log(unresolvedBugs === unresolvedBugs1);

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);

// dispatch project
store.dispatch(projectAdded({ name: "Project A" }));

// dispatch user
store.dispatch(userAdded({ name: "User A" }));
store.dispatch(userAdded({ name: "User B" }));

// const unresolvedBugs = store
// .getState()
// .entities.bugs.filter((bug) => !bug.bugResolved);

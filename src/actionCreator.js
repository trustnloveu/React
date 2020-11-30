import * as actions from "./actionTypes";

// arrow function
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

// standard function
// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});

export function bugRemoved(description) {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
}

// Action types
const BUG_ADDED = "bugAdded";
const BUG_RESOLVED = "bugResolved";
const BUG_REMOVED = "bugRemoved";

// Action Creators ( arrow f & standard f )
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description: description,
  },
});

// export function bugAdded(description) {
//   return {
//     type: BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id,
  },
});

export function bugRemoved(description) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
}

// Reducer
let lastId = 0; // [array of bugs] > initial state shouldn't be undefined > set default state as empty array

// if & else
export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === BUG_RESOLVED)
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );

  return state; // current state
}

// switch (exercise)
function switchReducer(state = [], action) {
  switch (action.state) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}

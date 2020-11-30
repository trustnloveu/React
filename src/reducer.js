// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import * as actions from "./actionTypes";

// [array of bugs] > initial state shouldn't be undefined > set default state as empty array
let lastId = 0;

// if & else
export default function reducer(state = [], action) {
  // case 1
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  // case 2
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  // case 3
  else if (action.type === actions.BUG_RESOLVED)
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );

  // current state
  return state;
}

// switch
function switchReducer(state = [], action) {
  switch (action.state) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}

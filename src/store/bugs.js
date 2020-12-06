import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
// import produce from "immer";

// Reducer
let lastId = 0; // [array of bugs] > initial state shouldn't be undefined > set default state as empty array

// arg: configuration object
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // map: actions => action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

console.log(slice);

export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;

// Selecotr
// export const getUnresolvedBugs = (state) =>
//   state.entities.bugs.filter((bug) => !bug.resolved);

// Memoizing Selector with 'Reselect' (input, output > result function)
// output of multiple selectors will end up as the input of result function
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

// createAction ( = createActionCreator)
// const bugUpdated = createAction("bugUpdated");
// console.log(bugUpdated({ id: 1 }));
// console.log(bugUpdated.type);
// console.log(bugUpdated.toString());

// redefine actions with Redux-toolkit
// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");

// 1st: initial state, 2nd: object that maps actions to functions that handle the actions
// export default createReducer([], {
//   // key(actions): value(funtions)  - event => event handler
//   [bugAdded.type]: (bugs, action) => {},

//   [bugResolved.type]: (bugs, action) => {},

//   [bugRemoved.type]: (bugs, action) => {
//     bugs.filter((bug) => bug.id !== action.payload.id);
//   },
// });

// Ex) How one of Emmer functions works
// produce(initialState, (draftState) => {
//   draftState.x = 1;
// });

// if & else
// export default function reducer(state = [], action) {
//   // if (action.type === BUG_ADDED)
//   if (action.type === bugAdded.type)
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   // else if (action.type === BUG_REMOVED)
//   else if (action.type === bugRemoved.type)
//     return state.filter((bug) => bug.id !== action.payload.id);
//   // else if (action.type === BUG_RESOLVED)
//   else if (action.type === bugResolved.type)
//     return state.map((bug) =>
//       bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//     );

//   return state; // current state (default)
// }

// Action types
// const BUG_ADDED = "bugAdded";
// const BUG_RESOLVED = "bugResolved";
// const BUG_REMOVED = "bugRemoved";

// Action Creators ( arrow f & standard f )
// export const bugAdded = (description) => ({
//   type: BUG_ADDED,
//   payload: {
//     description: description,
//   },
// });

// export function bugAdded(description) {
//   return {
//     type: BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }

// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id,
//   },
// });

// export function bugRemoved(description) {
//   return {
//     type: BUG_REMOVED,
//     payload: {
//       id: 1,
//     },
//   };
// }

// switch (exercise)
// function switchReducer(state = [], action) {
//   switch (action.state) {
//     case BUG_ADDED:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case BUG_REMOVED:
//       return state.filter((bug) => bug.id !== action.payload.id);
//     case BUG_RESOLVED:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );
//     default:
//       return state;
//   }
// }

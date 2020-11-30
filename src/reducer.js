// logging bugs

// [array of bugs] > initial state shouldn't be undefined > set default state as empty array
let lastId = 0;

// if & else
export default function reducer(state = [], action) {
  // case 1
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  // case 2
  else if (action.type === "bugRemoved")
    return state.filter((bug) => bug.id !== action.payload.id);

  // current state
  return state;
}

// switch
function switchReducer(state = [], action) {
  switch (action.state) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}

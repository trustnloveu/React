import { fromJS } from "immutable";
import reducer from "./bugs";
import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

export default function () {
  return configureStore({ reducer });
}

// export default function configureStore() {
//   const store = createStore(
//     reducer,
//     devToolsEnhancer({
//       trace: true,
//     })
//   );
//   return store;
// }

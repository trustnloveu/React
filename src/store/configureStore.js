import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

export default function () {
  return configureStore({
    reducer,
    middleware: [logger],
  });
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

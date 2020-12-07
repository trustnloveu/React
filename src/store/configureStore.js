import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

export default function () {
  return configureStore({
    // ...getDefaultMiddleware(),
    reducer,
    middleware: [logger({ destination: "console" }), func],
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

import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";

// middlerware
import logger from "./store/middleware/logger";

const store = createStore(reducer, applyMiddleware(logger));

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import logger from "./services/logService";

// intializing logging service with Sentry
logger.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

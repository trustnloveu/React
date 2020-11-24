import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn:
    "https://201bbfd412d34e2c96ce8a72697a8cf4@o481610.ingest.sentry.io/5530553",
  //   release: "http-app" + process.env.npm_package_version,
  integrations: [new Integrations.BrowserTracing()],

  // It's recommended adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

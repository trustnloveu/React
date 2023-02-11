import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

// Context
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);

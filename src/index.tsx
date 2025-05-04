import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Add polyfills for browser compatibility
import "core-js/stable";
import "regenerator-runtime/runtime";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

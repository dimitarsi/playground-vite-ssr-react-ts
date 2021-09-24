import React from "react";
import ReactDOM from "react-dom";
import { App } from "../app/App";

const root = document.getElementById("root");

const app = (
  <React.StrictMode>
    <App>{location.pathname}</App>
  </React.StrictMode>
);

if (root?.innerHTML) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}

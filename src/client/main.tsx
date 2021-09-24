import React from "react";
import ReactDOM from "react-dom";
import { App } from "../app/App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const root = document.getElementById("root");

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (root?.innerHTML) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}

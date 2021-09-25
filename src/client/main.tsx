import React from "react";
import ReactDOM from "react-dom";
import { App } from "../app/App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (root?.innerHTML) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}

import { FC, useState } from "react";
import { Switch, Route } from "react-router-dom";

export const App: FC = ({ children }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>Homepage</div>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

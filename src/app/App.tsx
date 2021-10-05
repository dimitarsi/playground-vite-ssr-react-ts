import { FC, StrictMode } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/molecules/Navigation/Navigation";
import routes from "./routes";

export const App = () => {
  return (
    <StrictMode>
      <Navigation />
      <Switch>
        {Object.entries(routes).map(([key, Component]) => {
          return (
            <Route key={key} path={key} exact={key === "/"}>
              <Component />
            </Route>
          );
        })}
      </Switch>
    </StrictMode>
  );
};

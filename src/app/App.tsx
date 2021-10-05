import { FC, StrictMode } from "react";
import { Switch, Route, Link } from "react-router-dom";

import style from "./app.module.css";

import HomePage from "./components/pages/Home/HomePage";
import NotFound from "./components/pages/NotFound/404Page";

export const App: FC = ({ children }) => {
  return (
    <StrictMode>
      <nav className={style.nav}>
        <Link to="/">Home</Link>
        <Link to="/missing">404</Link>
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </StrictMode>
  );
};

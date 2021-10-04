import { FC } from "react";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./components/pages/Home/HomePage";
import NotFound from "./components/pages/NotFound/404Page";

import style from "./app.module.css";

export const App: FC = ({ children }) => {
  return (
    <>
      <nav className={style.nav}>
        <Link to="/">Home</Link>
        <Link to="/missing">404</Link>
      </nav>
      <Switch>
        <Route path="/missing">
          <NotFound />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};

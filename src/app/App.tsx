import { FC } from "react";
import { Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";

const HomePageLazy = loadable(() => import("./components/pages/Home/HomePage"));
const NotFoundLazy = loadable(
  () => import("./components/pages/NotFound/404Page")
);

export const App: FC = ({ children }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/missing">404</Link>
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomePageLazy />
        </Route>
        <Route path="*">
          <NotFoundLazy />
        </Route>
      </Switch>
    </>
  );
};

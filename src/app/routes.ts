import HomePage from "./components/pages/Home/HomePage";
import NotFound from "./components/pages/NotFound/404Page";

export const HOME_URL = "/";
export const NOT_FOUND = "/404";

export default {
  [HOME_URL]: HomePage,
  "*": NotFound,
};

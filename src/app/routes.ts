import HomePage from "./components/pages/Home/HomePage";
import LoginPage from "./components/pages/Login/LoginPage";
import NotFound from "./components/pages/NotFound/404Page";
import ProfilePage from "./components/pages/Profile/Profile";

export const HOME_URL = "/";
export const NOT_FOUND = "/404";
export const LOGIN_URL = "/login";
export const PROFILE_URL = "/profile";

export default {
  [HOME_URL]: HomePage,
  [LOGIN_URL]: LoginPage,
  [PROFILE_URL]: ProfilePage,
  "*": NotFound,
};

import { Link } from "react-router-dom";
import { HOME_URL, LOGIN_URL } from "../../../routes";
import style from "./navigation.module.css";

export default () => {
  return (
    <nav className={style.nav}>
      <div>
        <Link to={HOME_URL}>Home</Link>
      </div>
      <div>
        <Link to={LOGIN_URL}>Login</Link>
      </div>
    </nav>
  );
};

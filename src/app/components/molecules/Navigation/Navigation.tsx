import { Link } from "react-router-dom";
import style from "./navigation.module.css";

export default () => {
  return (
    <nav className={style.nav}>
      <Link to="/">Home</Link>
      <Link to="/missing">404</Link>
    </nav>
  );
};

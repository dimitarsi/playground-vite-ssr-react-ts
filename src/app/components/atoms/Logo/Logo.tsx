import logo from "../../../../../public/images/React-icon.svg";

import styles from "./logo.module.css";

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </h1>
  );
};

export default Logo;

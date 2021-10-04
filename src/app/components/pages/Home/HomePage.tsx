import { useState } from "react";
import { Container } from "../../atoms/Container/Container";
import logo from "../../../../../public/images/React-icon.svg";

import styles from "./homepage.module.css";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.section}>
      <Container className={styles.p} onClick={() => setClicked(true)}>
        Lorem ipsum si amet
      </Container>
      {clicked && <Container className={styles.p}>Has been clicked!</Container>}
      <div className={styles.imgContainer}>
        <img src={logo} alt="React" />
      </div>
    </div>
  );
};

export default Home;

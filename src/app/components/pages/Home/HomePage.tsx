import React, { useState } from "react";
import { Container } from "../../atoms/Container/Container";
import logo from "../../../../../public/images/React-icon.svg";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Container onClick={() => setClicked(true)}>Home</Container>
      {clicked && <Container>Has been clicked!</Container>}
      <img src={logo} alt="" />
    </>
  );
};

export default Home;

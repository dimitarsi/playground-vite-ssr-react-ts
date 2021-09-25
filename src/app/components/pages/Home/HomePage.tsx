import React, { useState } from "react";
import { Container } from "../../atoms/Container/Container";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Container onClick={() => setClicked(true)}>Home</Container>
      {clicked && <Container>Has been clicked!</Container>}
    </>
  );
};

export default Home;

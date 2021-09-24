import { FC, useState } from "react";

export const App: FC = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div onClick={() => setClicked(true)}>Hello World</div>
      {clicked && <div>yes</div>}
      {children}
    </>
  );
};

import React, { FC } from "react";

export const Loading: FC<{ component: Promise<React.ReactNode> }> = ({
  component,
}) => {
  console.log(">>", component);
  return <div>Loading</div>;
};

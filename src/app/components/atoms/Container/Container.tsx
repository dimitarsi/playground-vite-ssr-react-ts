import { DOMAttributes, FC } from "react";

export const Container: FC<DOMAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  );
};

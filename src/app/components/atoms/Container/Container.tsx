import { FC, HTMLAttributes } from "react";
import styles from "./container.module.css";
import cn from "classnames";

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(className, styles.container)} {...props}>
      {children}
    </div>
  );
};

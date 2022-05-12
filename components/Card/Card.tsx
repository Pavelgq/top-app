import React from "react";
import cn from "classnames";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";

export const Card = ({
  variant = "white",
  children,
  className,
  ...prors
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.card, {
        [styles.blue]: variant === "blue",
      })}
      {...prors}
    >
      {children}
    </div>
  );
};

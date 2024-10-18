import { ReactNode } from "react";
import styles from "./tooltip.module.css";
import { Colors, Variant } from "../types";

type TooltipProps = {
  children?: ReactNode;
  text?: string;
  variant?: Variant;
  colorVariant?: Colors;
  position?: "top" | "right" | "bottom" | "left";
};

export const Tooltip = ({
  children,
  text,
  variant = "solid",
  colorVariant = "gray",
  position = "top",
}: TooltipProps) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <div
        className={[
          styles.tip,
          `static-variant--${variant}`,
          styles[position],
        ].join(" ")}
        data-color={colorVariant}
      >
        {text}
      </div>
    </div>
  );
};

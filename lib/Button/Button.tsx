import { ComponentProps } from "react";
import styles from "./button.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
const f = formatCSSModuleClasses(styles);

interface ButtonProps extends ComponentProps<"button"> {
  variant?: string;
  className?: string;
}

export const Button = ({
  variant,
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button className={`${f(["button"])} ${className}`} {...rest}>
      {children}
    </button>
  );
};

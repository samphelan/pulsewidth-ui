import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: string;
}

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};

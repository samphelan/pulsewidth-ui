import { ComponentProps, forwardRef } from "react";
import styles from "./textInput.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
const f = formatCSSModuleClasses(styles);

interface TextInputProps extends ComponentProps<"input"> {
  variant?: string;
}

export const TextInput = forwardRef(function TextInput(
  { variant, className, ...rest }: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      type="text"
      className={`${f(["input"])} ${className}`}
      {...rest}
      ref={ref}
    />
  );
});

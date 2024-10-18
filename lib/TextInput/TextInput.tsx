import { ComponentProps, forwardRef } from "react";
import styles from "./textInput.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import { Colors, Variant } from "../types";
const f = formatCSSModuleClasses(styles);

interface TextInputProps extends ComponentProps<"input"> {
  variant?: Variant;
  colorVariant?: Colors;
}

export const TextInput = forwardRef(function TextInput(
  {
    variant = "outline",
    colorVariant = "gray",
    className,
    ...rest
  }: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      type="text"
      className={`${f(["input"])} ${className} variant--${variant}`}
      data-color={colorVariant}
      {...rest}
      ref={ref}
    />
  );
});

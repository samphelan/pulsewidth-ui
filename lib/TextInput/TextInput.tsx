import { ComponentProps, forwardRef } from "react";
import styles from "./textInput.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import { Colors, Radius, Variant } from "../types";
const f = formatCSSModuleClasses(styles);

export interface TextInputProps extends ComponentProps<"input"> {
  variant?: Variant;
  colorVariant?: Colors;
  radius?: Radius;
}

export const TextInput = forwardRef(function TextInput(
  {
    variant = "outline",
    colorVariant = "gray",
    className,
    radius = 3,
    ...rest
  }: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      type="text"
      className={`${f([
        "input",
      ])} ${className} variant--${variant} radius${radius}`}
      data-color={colorVariant}
      {...rest}
      ref={ref}
    />
  );
});

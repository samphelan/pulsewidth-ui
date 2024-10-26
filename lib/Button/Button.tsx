import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";
import styles from "./button.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import { Colors, Radius, Variant } from "../types";
const f = formatCSSModuleClasses(styles);

interface InternalButtonProps<T extends ElementType> {
  variant?: Variant;
  colorVariant?: Colors;
  radius?: Radius;
  className?: string;
  as?: T;
}

export type ButtonProps<T extends ElementType> = InternalButtonProps<T> &
  ComponentPropsWithoutRef<T>;

export const Button = forwardRef(function Button<T extends ElementType>(
  {
    variant = "plain",
    colorVariant = "gray",
    radius = 3,
    children,
    as: Component = "button" as T,
    className,
    ...rest
  }: InternalButtonProps<T> & ComponentPropsWithRef<T>,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <Component
      ref={ref}
      className={`${f([
        "button",
      ])} transition-colors ${className} variant--${variant} radius${radius}`}
      data-color={colorVariant}
      {...rest}
    >
      {children}
    </Component>
  );
}) as <T extends ElementType>(
  props: ButtonProps<T> & {
    ref?: ForwardedRef<ComponentPropsWithRef<T>["ref"]>;
  }
) => JSX.Element;

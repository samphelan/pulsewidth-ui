import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";
import styles from "./flex.module.css";
import { formatCSSModuleClasses } from "../utils/functions";

const f = formatCSSModuleClasses(styles);

interface InternalFlexProps<T extends ElementType> {
  direction?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "responsive-row";
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  textAlign?: React.CSSProperties["textAlign"];
  as?: T;
}

export type FlexProps<T extends ElementType> = InternalFlexProps<T> &
  ComponentPropsWithoutRef<T>;

export const Flex = forwardRef(function Flex<T extends ElementType>(
  {
    direction = "row",
    align = "stretch",
    justify = "stretch",
    textAlign = "inherit",
    className,
    as: Component = "div" as T,
    ...rest
  }: InternalFlexProps<T> & ComponentPropsWithRef<T>,
  ref: ForwardedRef<T>
) {
  return (
    <Component
      className={[
        f([
          "container",
          `direction--${direction}`,
          `align--${align}`,
          `justify--${justify}`,
          `text-align--${textAlign}`,
        ]),
        className,
      ].join(" ")}
      ref={ref}
      {...rest}
    ></Component>
  );
}) as <T extends ElementType>(
  props: FlexProps<T> & {
    ref?: ForwardedRef<ComponentPropsWithRef<T>["ref"]>;
  }
) => JSX.Element;

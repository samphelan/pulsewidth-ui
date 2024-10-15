import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";
import styles from "./listItemButton.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import { Variant } from "../types";

const f = formatCSSModuleClasses(styles);

interface ListItemButtonProps<T extends ElementType>
  extends ComponentPropsWithoutRef<"button"> {
  value?: string;
  as?: T;
  variant?: Variant;
}

export const ListItemButton = forwardRef(function ListItemButton<
  T extends ElementType
>(
  {
    children,
    onClick,
    as: Component = "button" as T,
    variant,
    className,
    ...rest
  }: ListItemButtonProps<T> & ComponentPropsWithRef<T>,
  ref: ForwardedRef<ComponentPropsWithRef<T>["ref"]>
) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  };

  return (
    <Component
      ref={ref}
      onClick={handleClick}
      className={[f(["button", `variant--${variant}`]), className].join(" ")}
      {...rest}
    >
      {children}
    </Component>
  );
}) as <T extends ElementType = "button">(
  props: ListItemButtonProps<T> & {
    ref?: ForwardedRef<ComponentPropsWithRef<T>["ref"]>;
  } & ComponentPropsWithoutRef<T>
) => JSX.Element;

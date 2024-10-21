import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  useContext,
} from "react";
import styles from "./listItemButton.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import { Variant } from "../types";
import ListContext from "../List/ListContext";

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
    variant = "plain",
    className,
    ...rest
  }: ListItemButtonProps<T> & ComponentPropsWithRef<T>,
  ref: ForwardedRef<ComponentPropsWithRef<T>["ref"]>
) {
  const listContext = useContext(ListContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  };

  return (
    <Component
      ref={ref}
      onClick={handleClick}
      className={[
        f(["button", `list-variant--${listContext.variant}`]),
        className,
        `variant--${listContext.variant}`,
      ].join(" ")}
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

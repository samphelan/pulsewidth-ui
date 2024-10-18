import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import styles from "./list.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import { Colors, Variant } from "../types";
import ListContext from "./ListContext";

const f = formatCSSModuleClasses(styles);

interface ListProps extends ComponentPropsWithoutRef<"ul"> {
  children?: ReactNode;
  unstyled?: boolean;
  direction?: "column" | "row" | "responsive-row";
  variant?: Variant;
  colorVariant?: Colors;
  opaque?: boolean;
}

export const List = forwardRef<HTMLUListElement, ListProps>(function List(
  {
    children,
    className,
    unstyled = false,
    direction = "column",
    variant = "plain",
    colorVariant = "gray",
    opaque = false,
    ...rest
  }: ListProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  console.log(variant);
  return (
    <ul
      ref={ref}
      className={`${
        unstyled ? "" : f(["ul", `direction-${direction}`])
      } ${className} static-variant--${variant} ${opaque ? "opaque" : ""}`}
      data-color={colorVariant}
      {...rest}
    >
      <ListContext.Provider value={{ color: colorVariant, variant: variant }}>
        {children}
      </ListContext.Provider>
    </ul>
  );
});

import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import styles from "./list.module.css";
import { formatCSSModuleClasses } from "../utils/functions";

const f = formatCSSModuleClasses(styles);

interface ListProps extends ComponentPropsWithoutRef<"ul"> {
  children?: ReactNode;
  unstyled?: boolean;
  direction?: "column" | "row" | "responsive-row";
}

export const List = forwardRef<HTMLUListElement, ListProps>(function List(
  {
    children,
    className,
    unstyled = false,
    direction = "column",
    ...rest
  }: ListProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <ul
      ref={ref}
      className={`${
        unstyled ? "" : f(["ul", `direction-${direction}`])
      } ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
});

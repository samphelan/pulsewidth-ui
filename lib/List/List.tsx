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
}

export const List = forwardRef(function List(
  { children, className, unstyled = false, ...rest }: ListProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <ul
      ref={ref}
      className={`${unstyled ? "" : f(["ul"])} ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
});

import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import styles from "./listItem.module.css";
import { formatCSSModuleClasses } from "../utils/functions";

const f = formatCSSModuleClasses(styles);

interface ListItemProps extends ComponentPropsWithoutRef<"li"> {
  children?: ReactNode;
}

export const ListItem = forwardRef(function ListItem(
  { children }: ListItemProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  return (
    <li ref={ref} className={f(["li"])}>
      {children}
    </li>
  );
});

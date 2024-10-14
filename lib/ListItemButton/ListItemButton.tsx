import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";

import styles from "./listItemButton.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import DynamicRoot from "../utils/internalComponents/DynamicRoot";

const f = formatCSSModuleClasses(styles);

interface ListItemButtonProps<T extends ElementType = "button">
  extends ComponentPropsWithoutRef<"button"> {
  value?: string;
  as?: T;
}

export const ListItemButton = forwardRef(function ListItemButton<
  T extends ElementType = "button"
>(
  {
    children,
    onClick,
    as: Component = "button" as T,
    ...rest
  }: ListItemButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <DynamicRoot
      as="button"
      ref={ref}
      onClick={handleClick}
      className={f(["button"])}
      onFocus={handleFocus}
      {...rest}
    >
      {children}
    </DynamicRoot>
  );
});

import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

import styles from "./listItemButton.module.css";
import { formatCSSModuleClasses } from "../utils/functions";

const f = formatCSSModuleClasses(styles);

interface ListItemButtonProps extends ComponentPropsWithoutRef<"button"> {
  value?: string;
}

export const ListItemButton = forwardRef(function ListItemButton(
  { children, onClick, ...rest }: ListItemButtonProps,
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
    <button
      ref={ref}
      onClick={handleClick}
      className={f(["button"])}
      onFocus={handleFocus}
      {...rest}
    >
      {children}
    </button>
  );
});

import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

import styles from "./flex.module.css";
import { formatCSSModuleClasses } from "../utils/functions";

const f = formatCSSModuleClasses(styles);

interface FlexProps extends ComponentPropsWithoutRef<"div"> {
  direction?: React.CSSProperties["flexDirection"];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  textAlign?: React.CSSProperties["textAlign"];
}

export const Flex = forwardRef(function Flex(
  {
    direction = "row",
    align = "stretch",
    justify = "stretch",
    textAlign = "inherit",
    ...rest
  }: FlexProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={f([
        "container",
        `direction--${direction}`,
        `align--${align}`,
        `justify--${justify}`,
        `text-align--${textAlign}`,
      ])}
      ref={ref}
      {...rest}
    ></div>
  );
});

import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useState,
} from "react";
import styles from "./accordion.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import AccordionContext from "./AccordionContext";
import { Colors, Variant } from "../types";

const f = formatCSSModuleClasses(styles);

export interface AccordionProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  expanded?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: Variant;
  color?: Colors;
}

export const Accordion = forwardRef(function Accordion(
  {
    children,
    defaultExpanded = false,
    expanded = defaultExpanded,
    variant = "plain",
    color = "gray",
    disabled = false,
    className = "",
    ...rest
  }: AccordionProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const contextValue = {
    expanded: isExpanded,
    toggle: () => {
      setIsExpanded((current) => !current);
    },
    variant,
    color,
    disabled,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={[f(["accordion"]), className].join(" ")}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

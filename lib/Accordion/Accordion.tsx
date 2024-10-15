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

const f = formatCSSModuleClasses(styles);

interface AccordionProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  expanded?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Accordion = forwardRef(function Accordion(
  {
    children,
    defaultExpanded = false,
    expanded = defaultExpanded,
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

import { ForwardedRef, forwardRef, ReactNode, useState } from "react";
import styles from "./accordion.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import AccordionContext from "./AccordionContext";

const f = formatCSSModuleClasses(styles);

interface AccordionProps {
  children?: ReactNode;
  expanded?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Accordion = forwardRef(function Accordion(
  {
    children,
    expanded = false,
    disabled = false,
    className = "",
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
      <div className={[f(["accordion"]), className].join(" ")} ref={ref}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

import { ForwardedRef, forwardRef, ReactNode, useContext } from "react";
import AccordionContext from "../Accordion/AccordionContext";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./accordionHeader.module.css";
import { formatCSSModuleClasses } from "../utils/functions";

const f = formatCSSModuleClasses(styles);

interface AccordionHeaderProps {
  children?: ReactNode;
  indicatorPos?: "left" | "right";
}

export const AccordionHeader = forwardRef(function AccordionHeader(
  { children, indicatorPos = "left" }: AccordionHeaderProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { expanded, disabled, toggle } = useContext(AccordionContext);

  return (
    <button
      ref={ref}
      className={f(["header", `header--${indicatorPos}`])}
      onClick={toggle}
      disabled={disabled}
    >
      <div className={f(["header-children"])}>{children}</div>
      <div
        className={f([
          "indicator",
          `indicator--${expanded ? "expanded" : "collapsed"}`,
        ])}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </button>
  );
});

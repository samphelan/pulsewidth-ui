import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useContext,
} from "react";
import AccordionContext from "../Accordion/AccordionContext";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./accordionHeader.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import { Button } from "../Button/Button";

const f = formatCSSModuleClasses(styles);

interface AccordionHeaderProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  indicatorPos?: "left" | "right";
}

export const AccordionHeader = forwardRef(function AccordionHeader(
  { children, indicatorPos = "left", className, ...rest }: AccordionHeaderProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const {
    expanded,
    disabled,
    variant,
    color = "gray",
    toggle,
  } = useContext(AccordionContext);

  return (
    <Button
      ref={ref}
      className={[f(["header", `header--${indicatorPos}`]), className].join(
        " "
      )}
      onClick={toggle}
      disabled={disabled}
      variant={variant}
      colorVariant={color}
      {...rest}
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
    </Button>
  );
});

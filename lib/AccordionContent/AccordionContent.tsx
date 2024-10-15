import { ForwardedRef, forwardRef, useContext } from "react";
import styles from "./accordionContent.module.css";
import { formatCSSModuleClasses } from "../utils/functions";
import AccordionContext from "../Accordion/AccordionContext";

const f = formatCSSModuleClasses(styles);

interface AccordionContentProps {
  children?: React.ReactNode;
  className?: string;
}

export const AccordionContent = forwardRef(function AccordionContent(
  { children, className }: AccordionContentProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { expanded } = useContext(AccordionContext);

  return (
    <div
      ref={ref}
      className={[
        f(["content", `content--${expanded ? "expanded" : "collapsed"}`]),
        className,
      ].join(" ")}
    >
      <div className={f(["first-row"])}>{children}</div>
    </div>
  );
});

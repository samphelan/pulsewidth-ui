import * as React from "react";
import { Colors, Variant } from "../types";

/**
 * @ignore - internal component.
 */

const DropdownContext = React.createContext<{
  open: boolean;
  variant?: Variant;
  color?: Colors;
  handleChange: (open: boolean) => void;
}>({ open: false, handleChange: () => {} });

if (process.env.NODE_ENV !== "production") {
  DropdownContext.displayName = "DropdownContext";
}

export default DropdownContext;

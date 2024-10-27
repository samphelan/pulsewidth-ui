import * as React from "react";
import { Colors, Radius, Variant } from "../types";

/**
 * @ignore - internal component.
 */

const DropdownContext = React.createContext<{
  open: boolean;
  variant?: Variant;
  colorVariant?: Colors;
  radius?: Radius;
  handleChange: (open: boolean) => void;
}>({
  open: false,
  handleChange: () => {},
  variant: "outline",
  colorVariant: "gray",
  radius: 3,
});

if (process.env.NODE_ENV !== "production") {
  DropdownContext.displayName = "DropdownContext";
}

export default DropdownContext;

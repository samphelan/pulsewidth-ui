import * as React from "react";
import { Colors, Variant } from "../types";

/**
 * @ignore - internal component.
 */

const RadioGroupContext = React.createContext<
  Partial<{
    selected: string;
    onChange: (s: string) => void;
    variant: Variant;
    color: Colors;
    name: string;
  }>
>({});

if (process.env.NODE_ENV !== "production") {
  RadioGroupContext.displayName = "RadioGroupContext";
}

export default RadioGroupContext;

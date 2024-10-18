import * as React from "react";
import { Colors, Variant } from "../types";

/**
 * @ignore - internal component.
 */

const ListContext = React.createContext<
  Partial<{
    variant: Variant;
    color: Colors;
    toggle: (event: React.SyntheticEvent) => void;
  }>
>({});

if (process.env.NODE_ENV !== "production") {
  ListContext.displayName = "ListContext";
}

export default ListContext;

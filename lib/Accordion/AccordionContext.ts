import * as React from 'react';
import { Colors, Variant } from '../types';

/**
 * @ignore - internal component.
 */

const AccordionContext = React.createContext<
  Partial<{
    disabled: boolean;
    expanded: boolean;
    variant: Variant;
    color: Colors;
    toggle: (event: React.SyntheticEvent) => void;
  }>
>({});

if (process.env.NODE_ENV !== 'production') {
  AccordionContext.displayName = 'AccordionContext';
}

export default AccordionContext;
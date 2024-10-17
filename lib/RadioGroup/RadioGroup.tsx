import { ReactNode } from "react";
import RadioGroupContext from "./RadioGroupContext";

interface RadioGroupProps {
  children?: ReactNode;
  name?: string;
}

export const RadioGroup = ({
  name = `${Date.now().toLocaleString()}${Math.random()}`,
  children,
}: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider value={{ name }}>
      {children}
    </RadioGroupContext.Provider>
  );
};

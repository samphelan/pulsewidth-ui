import { Button } from "pulsewidth-ui";
import { useContext } from "react";
import DropdownContext from "../Dropdown/DropdownContext";
import { ButtonProps } from "../Button/Button";

export const DropdownButton = ({ children }: ButtonProps<"button">) => {
  const { handleChange, open, variant, colorVariant, radius } =
    useContext(DropdownContext);

  return (
    <Button
      variant={variant}
      colorVariant={colorVariant}
      onClick={() => {
        handleChange(!open);
      }}
      radius={radius}
    >
      {children}
    </Button>
  );
};

import { ReactNode, useRef, useState } from "react";
import DropdownContext from "./DropdownContext";
import { Flex } from "../Flex/Flex";
import { Colors, Radius, Variant } from "../types";
import styles from "./dropdown.module.css";
import useClickOutside from "../../hooks/useClickOutside";

interface DropdownProps {
  children?: ReactNode;
  open?: boolean;
  onChange?: (open: boolean) => void;
  variant?: Variant;
  colorVariant?: Colors;
  radius?: Radius;
}

export const Dropdown = ({
  children,
  open = false,
  onChange,
  variant,
  colorVariant,
  radius,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => {
    handleChange(false);
  });

  const handleChange = (b: boolean) => {
    setIsOpen(b);
    if (onChange) onChange(b);
  };

  return (
    <DropdownContext.Provider
      value={{
        open: open || isOpen,
        handleChange,
        variant,
        colorVariant,
        radius,
      }}
    >
      <Flex ref={wrapperRef} className={styles.wrapper} direction="column">
        {children}
      </Flex>
    </DropdownContext.Provider>
  );
};

import { ReactNode, useRef, useState } from "react";
import DropdownContext from "./DropdownContext";
import { Flex } from "pulsewidth-ui";
import styles from "./dropdown.module.css";
import useClickOutside from "../../hooks/useClickOutside";

interface DropdownProps {
  children?: ReactNode;
  open?: boolean;
  onChange?: (open: boolean) => void;
}

export const Dropdown = ({
  children,
  open = false,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => {
    handleChange(false);
  });

  const handleChange = (b: boolean) => {
    console.log("this calls");
    setIsOpen(b);
    if (onChange) onChange(b);
  };

  return (
    <DropdownContext.Provider
      value={{
        open: open || isOpen,
        handleChange,
      }}
    >
      <Flex ref={wrapperRef} className={styles.wrapper}>
        {children}
      </Flex>
    </DropdownContext.Provider>
  );
};

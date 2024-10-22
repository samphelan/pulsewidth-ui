import { Flex } from "pulsewidth-ui";
import { useContext } from "react";
import DropdownContext from "../Dropdown/DropdownContext";
import { FlexProps } from "../Flex/Flex";
import styles from "./dropdownContent.module.css";

export const DropdownContent = ({ children }: FlexProps<"div">) => {
  const { open, variant, color } = useContext(DropdownContext);
  if (open) {
    return (
      <Flex
        variant={variant}
        colorVariant={color}
        opaque
        direction="column"
        className={styles.wrapper}
      >
        {children}
      </Flex>
    );
  }
  return null;
};

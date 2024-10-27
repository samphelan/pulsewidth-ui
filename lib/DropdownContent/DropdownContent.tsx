import { useContext } from "react";
import DropdownContext from "../Dropdown/DropdownContext";
import { Flex, FlexProps } from "../Flex/Flex";
import styles from "./dropdownContent.module.css";

export const DropdownContent = ({ children }: FlexProps<"div">) => {
  const { open } = useContext(DropdownContext);
  if (open) {
    return (
      <Flex className={styles.wrapper} direction="column">
        {children}
      </Flex>
    );
  }
  return null;
};

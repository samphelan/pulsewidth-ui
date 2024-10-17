import { Flex } from "pulsewidth-ui";
import { ReactNode } from "react";
import styles from "./sandbox.module.css";

type SandboxControlsProps = {
  children?: ReactNode;
};

export const SandboxControls = ({ children }: SandboxControlsProps) => {
  return (
    <Flex className={styles.controls} direction="column">
      {children}
    </Flex>
  );
};

type SandboxDisplayProps = {
  children?: ReactNode;
};

export const SandboxDisplay = ({ children }: SandboxDisplayProps) => {
  return (
    <Flex
      className={styles.display}
      direction="column"
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  );
};

type SandboxProps = {
  children?: ReactNode;
};

const Sandbox = ({ children }: SandboxProps) => {
  return (
    <Flex direction="responsive-row" className={styles.wrapper}>
      {children}
    </Flex>
  );
};

export default Sandbox;

import { Colors, Radius, Variant } from "pulsewidth-ui";
import styles from "./modal.module.css";
import { ReactNode, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { Sheet } from "../Sheet/Sheet";

interface ModalProps {
  onExit: () => void;
  variant?: Variant;
  colorVariant?: Colors;
  children?: ReactNode;
  open: boolean;
  radius?: Radius;
}

export const Modal = ({
  onExit,
  variant = "outline",
  colorVariant = "gray",
  children,
  open = false,
  radius = 3,
}: ModalProps) => {
  const modalRef = useRef<HTMLElement>(null);
  useClickOutside(modalRef, onExit);

  if (open) {
    return (
      <div
        className={`${styles["wrapper"]} ${open ? "" : styles["exitWrapper"]}`}
      >
        <Sheet
          ref={modalRef}
          variant={variant}
          className={`${styles["modal"]}`}
          radius={radius}
          colorVariant={colorVariant}
        >
          {children}
        </Sheet>
      </div>
    );
  }

  return null;
};

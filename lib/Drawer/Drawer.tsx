import { Colors, Flex, Variant } from "pulsewidth-ui";
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./drawer.module.css";
import useClickOutside from "../../hooks/useClickOutside";

interface DrawerProps {
  children?: ReactNode;
  onExit: () => void;
  open: boolean;
  variant?: Variant;
  colorVariant?: Colors;
}

export const Drawer = ({
  children,
  onExit,
  open = false,
  variant = "soft",
  colorVariant = "gray",
}: DrawerProps) => {
  const [visible, setVisible] = useState(open);
  const drawerRef = useRef<HTMLElement>(null);
  useClickOutside(drawerRef, onExit);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      setTimeout(() => {
        setVisible(false);
      }, 200);
    }
  }, [open]);

  if (visible) {
    return (
      <div
        className={[styles["wrapper"], !open ? styles["exitWrapper"] : ""].join(
          " "
        )}
      >
        <Flex
          className={[
            styles["drawer"],
            !open ? styles["exitDrawer"] : "",
            `static-variant--${variant}`,
            `opaque`,
          ].join(" ")}
          direction="column"
          ref={drawerRef}
          data-color={colorVariant}
        >
          {children}
        </Flex>
      </div>
    );
  }
  return null;
};

import { Colors, Flex, Variant } from "pulsewidth-ui";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./drawer.module.css";
import useClickOutside from "../../hooks/useClickOutside";

interface DrawerProps {
  children?: ReactNode;
  onExit: () => void;
  open: boolean;
  variant?: Variant;
  colorVariant?: Colors;
  className?: string;
  style?: CSSProperties;
  anchor?: "top" | "right" | "bottom" | "left";
}

export const Drawer = ({
  children,
  onExit,
  open = false,
  variant = "soft",
  colorVariant = "gray",
  className,
  style,
  anchor = "left",
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
        style={style}
        {...{ inert: !open ? "" : undefined }}
      >
        <Flex
          className={[
            styles["drawer"],
            !open ? styles[`exitDrawer-${anchor}`] : "",
            `static-variant--${variant}`,
            styles[`anchor-${anchor}`],
            className,
            `opaque`,
          ].join(" ")}
          style={style}
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

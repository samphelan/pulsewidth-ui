import {
  useEffect,
  forwardRef,
  ComponentPropsWithoutRef,
  useRef,
  MutableRefObject,
  ChangeEvent,
} from "react";
import styles from "./checkbox.module.css"; // Assume you have styles here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Colors, Variant } from "../types";

interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size" | "onChange"> {
  size?: "small" | "medium" | "large";
  indeterminate?: boolean;
  label?: string;
  circle?: boolean;
  variant?: Variant;
  colorVariant?: Colors;
  checked?: boolean;
  onChange?: (
    checked: boolean,
    indeterminate?: boolean,
    e?: ChangeEvent
  ) => void;
  disableIcon?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = "medium",
      indeterminate = false,
      label,
      className,
      disabled,
      checked,
      onChange,
      colorVariant,
      variant = "outline",
      circle = false,
      disableIcon = false,
      ...rest
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);

    const sizeClass = `checkbox--${size}`;
    const disabledClass = disabled ? "checkbox--disabled" : "";
    const variantClass = `variant--${variant}`;
    const shapeClass = `checkbox--${circle ? "circle" : "square"}`;
    const classes = [
      "checkbox-icon__custom",
      sizeClass,
      disabledClass,
      shapeClass,
      variantClass,
    ]
      .filter((name) => name !== "")
      .map((name) => styles[name]);

    const renderIcon = () =>
      checked ? (
        <FontAwesomeIcon
          icon={indeterminate ? faMinus : faCheck}
          className={styles[sizeClass]}
        />
      ) : null;

    // Merge internal and forwarded refs
    const setRefs = (node: HTMLInputElement | null) => {
      if (forwardedRef) {
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else {
          (forwardedRef as MutableRefObject<HTMLInputElement | null>).current =
            node;
        }
      }
    };

    // Handle checkbox changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log("this calls");
      if (!disabled) {
        if (onChange) {
          onChange(e.currentTarget.checked, e.currentTarget.indeterminate, e);
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // Prevent the page from scrolling when the space key is pressed
        if (onChange) onChange(!checked);
      }
    };

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    useEffect(() => {
      if (forwardedRef) {
        setRefs(internalRef.current);
      }
    }, [forwardedRef]);

    return (
      <label
        className={[
          styles["checkbox-wrapper"],
          disabled && styles["checkbox--disabled"],
          className,
        ].join(" ")}
        onKeyDown={handleKeyDown}
        role="checkbox"
        aria-checked={indeterminate ? "mixed" : checked}
        aria-disabled={disabled}
      >
        <input
          type="checkbox"
          ref={(el) => {
            (internalRef as MutableRefObject<HTMLInputElement | null>).current =
              el;
            setRefs(el);
          }}
          onFocus={() => {
            console.log("this focuses");
          }}
          className={styles["checkbox"]}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          aria-hidden="true"
          {...rest}
        />
        <span
          className={[...classes, variantClass].join(" ")}
          data-color={colorVariant}
        >
          {renderIcon()}
        </span>
        {label && (
          <span
            className={[
              styles["checkbox-label"],
              ...(disableIcon
                ? [styles["disableIcon__label"], variantClass]
                : []),
            ].join(" ")}
            data-color={disableIcon && colorVariant}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

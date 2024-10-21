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
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  size?: "small" | "medium" | "large";
  indeterminate?: boolean;
  label?: string;
  circle?: boolean;
  variant?: Variant;
  colorVariant?: Colors;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
      if (!disabled) {
        //setIsChecked(e.target.checked);
        if (onChange) {
          onChange(e);
        }
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
      >
        <input
          type="checkbox"
          ref={(el) => {
            (internalRef as MutableRefObject<HTMLInputElement | null>).current =
              el;
            setRefs(el);
          }}
          className={styles["checkbox"]}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...rest}
        />
        <span
          className={[...classes, variantClass].join(" ")}
          data-color={colorVariant}
        >
          {renderIcon()}
        </span>
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

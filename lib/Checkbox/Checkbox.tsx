import {
  useState,
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

interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  size?: "small" | "medium" | "large";
  indeterminate?: boolean;
  label?: string;
  variant?: "square" | "circle";
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
      variant = "square",
      ...rest
    },
    forwardedRef
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const internalRef = useRef<HTMLInputElement>(null);

    const sizeClass = `checkbox--${size}`;
    const disabledClass = disabled ? "checkbox--disabled" : "";
    const variantClass = `checkbox--${variant}`;
    const classes = [
      "checkbox-icon__custom",
      sizeClass,
      disabledClass,
      variantClass,
      className || "",
    ]
      .filter((name) => name !== "")
      .map((name) => styles[name]);

    const renderIcon = () =>
      isChecked ? (
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
        setIsChecked(e.target.checked);
        if (rest.onChange) {
          rest.onChange(e);
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
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...rest}
        />
        <span className={classes.join(" ")}>{renderIcon()}</span>
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

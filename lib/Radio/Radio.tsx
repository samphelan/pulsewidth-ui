import {
  forwardRef,
  ComponentPropsWithoutRef,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import styles from "./radio.module.css";

interface RadioButtonProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  size?: "small" | "medium" | "large";
  label?: string;
  iconChecked?: React.ReactNode;
  iconUnchecked?: React.ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      size = "medium",
      label,
      iconChecked,
      iconUnchecked,
      checked,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    // Handle radio button state change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.checked);
      setIsChecked(e.target.checked);
      if (onChange) onChange(e); // Call the provided onChange handler
    };

    // Determine the icon to show based on the checked state
    const renderIcon = () => (isChecked ? iconChecked : iconUnchecked);

    // Size class to apply styles dynamically
    const sizeClass = `radio-button--${size}`;

    // Keep internal state updated based on parent state
    useEffect(() => {
      setIsChecked(checked || false);
    }, [checked]);

    return (
      <label className={[styles["radio-button"], styles[sizeClass]].join(" ")}>
        <input
          type="radio"
          ref={ref}
          checked={isChecked}
          onChange={handleChange}
          className={styles["radio-button__input"]}
          {...rest}
        />
        <span className={styles["radio-button__custom-icon"]}>
          {iconChecked || iconUnchecked ? (
            renderIcon()
          ) : (
            <span className={styles["radio-button__circle"]}>
              <span
                className={[
                  styles["radio-button__inner-circle"],
                  isChecked ? styles["checked"] : styles["unchecked"],
                ].join(" ")}
              />
            </span>
          )}
        </span>
        {label && (
          <span className={styles["radio-button__label"]}>{label}</span>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";

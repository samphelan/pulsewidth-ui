import {
  forwardRef,
  ComponentPropsWithoutRef,
  ChangeEvent,
  ForwardedRef,
  useContext,
} from "react";
import styles from "./radio.module.css";
import { Colors, Radius, Variant } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import RadioGroupContext from "../RadioGroup/RadioGroupContext";

type BasicSlotProps = {
  className: string;
};

export type RadioSlotProps = {
  root?: BasicSlotProps;
  label?: BasicSlotProps;
  iconContainer?: BasicSlotProps;
  icon?: BasicSlotProps;
};

interface RadioButtonProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size" | "onChange"> {
  size?: "small" | "medium" | "large";
  label?: string;
  customIcon?: IconDefinition;
  disableIcon?: boolean;
  variant?: Variant;
  colorVariant?: Colors;
  labelPos?: "top" | "right" | "bottom" | "left";
  slotProps?: RadioSlotProps;
  spacing?: Radius;
  onChange?: (checked: boolean, e?: ChangeEvent) => void;
}

export const Radio = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      size = "medium",
      label,
      customIcon,
      checked = false,
      onChange,
      disableIcon = false,
      variant = "outline",
      colorVariant = "gray",
      labelPos = "right",
      spacing = 3,
      slotProps,
      className,
      style,
      ...rest
    }: RadioButtonProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    //const [isChecked, setIsChecked] = useState(checked);
    const group = useContext(RadioGroupContext);

    // Handle radio button state change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      //setIsChecked(e.target.checked);
      if (onChange) onChange(e.currentTarget.checked, e); // Call the provided onChange handler
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // Prevent the page from scrolling when the space key is pressed
        if (onChange) onChange(true);
      }
    };

    // Size class to apply styles dynamically
    const sizeClass = `radio-button--${size}`;

    // Label Classes

    return (
      <label
        className={[
          styles["radio-button"],
          styles[sizeClass],
          className,
          styles[`labelPos--${labelPos}`],
          ...(slotProps?.root?.className ? [slotProps.root.className] : []),
        ].join(" ")}
        data-color={colorVariant}
        onKeyDown={handleKeyDown}
        role="radio"
        aria-checked={checked}
        style={style}
      >
        <input
          type="radio"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          className={styles["radio-button__input"]}
          name={group.name}
          {...rest}
        />
        {!disableIcon && (
          <span
            className={[
              styles["radio-button__circle"],
              disableIcon
                ? null
                : `variant--${variant} ${styles[`variant--${variant}`]}`,

              ...(slotProps?.iconContainer?.className
                ? [slotProps.iconContainer.className]
                : []),
              ,
              `m${labelPos.charAt(0)}${spacing}`,
            ].join(" ")}
          >
            <FontAwesomeIcon
              icon={customIcon || faCircle}
              style={{ opacity: checked ? "1" : "0" }}
            />
          </span>
        )}
        {label && (
          <span
            className={[
              styles["radio-button__label"],
              ...(slotProps?.label?.className
                ? [slotProps.label.className]
                : []),
              ,
              disableIcon
                ? `variant--${
                    checked
                      ? variant === "soft" || variant === "outline"
                        ? "solid"
                        : variant === "plain"
                        ? "soft"
                        : "outline"
                      : variant
                  } ${styles["disable-icon__label"]}`
                : null,
            ].join(" ")}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";

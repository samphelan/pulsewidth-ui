import {
  forwardRef,
  ComponentPropsWithoutRef,
  ChangeEvent,
  ForwardedRef,
  useContext,
} from "react";
import styles from "./radio.module.css";
import { Colors, Variant } from "../types";
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
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  size?: "small" | "medium" | "large";
  label?: string;
  customIcon?: IconDefinition;
  disableIcon?: boolean;
  variant?: Variant;
  colorVariant?: Colors;
  labelPos?: "top" | "right" | "bottom" | "left";
  slotProps?: RadioSlotProps;
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
      slotProps,
      ...rest
    }: RadioButtonProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    //const [isChecked, setIsChecked] = useState(checked);
    const group = useContext(RadioGroupContext);

    // Handle radio button state change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.checked);

      //setIsChecked(e.target.checked);
      if (onChange) onChange(e); // Call the provided onChange handler
    };

    // Size class to apply styles dynamically
    const sizeClass = `radio-button--${size}`;

    // Label Classes

    return (
      <label
        className={[
          styles["radio-button"],
          styles[sizeClass],
          disableIcon
            ? `variant--${
                checked
                  ? variant === "soft" || variant === "outline"
                    ? "solid"
                    : variant === "plain"
                    ? "soft"
                    : "outline"
                  : variant
              } ${styles["disable-icon"]}`
            : null,
          styles[`labelPos--${labelPos}`],
          ...(slotProps?.root?.className ? [slotProps.root.className] : []),
        ].join(" ")}
        data-color={colorVariant}
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

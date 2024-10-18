import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
  MouseEvent,
  useEffect,
  useRef,
} from "react";
import styles from "./select.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useClickOutside from "../../hooks/useClickOutside";
import { ListItem } from "../ListItem/ListItem";
import { ListItemButton } from "../ListItemButton/ListItemButton";
import { List } from "../List/List";
import { Button } from "../Button/Button";
import { Colors, Variant } from "../types";

interface OptionProps {
  value: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Option = ({ children, onClick }: OptionProps) => {
  return (
    <ListItem>
      <ListItemButton className={styles["option-button"]} onClick={onClick}>
        {children}
      </ListItemButton>
    </ListItem>
  );
};

interface SelectProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  colorVariant?: Colors;
  variant?: Variant;
  selected?: string;
  onChange?: (v: string) => void;
}

export const Select = ({
  children,
  style,
  colorVariant,
  variant,
  selected,
  onChange,
}: SelectProps) => {
  const [internalSelection, setInternalSelection] = useState<ReactNode>();
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState<ReactElement<OptionProps>[]>([]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => {
    setShowOptions(false);
  });

  const handleClick = () => {
    setShowOptions((current) => !current);
  };

  const handleOptionClick = (val: string) => {
    const option = (options as ReactElement<OptionProps>[]).find(
      (o) => o.props.value === val
    );
    if (option) setInternalSelection(option.props.children);
    if (onChange) onChange(val);
    setShowOptions(false);
  };

  useEffect(() => {
    const validOptions = Children.toArray(children).filter(
      (child) => isValidElement(child) && child.type === Option
    ) as ReactElement<OptionProps>[];

    console.log(validOptions);

    setOptions(validOptions);
  }, [children]);

  return (
    <div className={styles.wrapper} style={style} ref={wrapperRef}>
      <Button
        role="listbox"
        className={styles["select-button"]}
        onClick={handleClick}
        colorVariant={colorVariant}
        variant={variant}
      >
        <span>{selected || "Choose One..."}</span>
        <FontAwesomeIcon icon={faAngleDown} className={styles["caret-icon"]} />
      </Button>
      {showOptions && (
        <List className={styles["ul"]} opaque>
          {Children.map(children, (child) => {
            if (isValidElement(child) && child.type === Option) {
              return cloneElement(child as ReactElement<OptionProps>, {
                onClick: () => handleOptionClick(child.props.value),
              });
            }
          })}
        </List>
      )}
    </div>
  );
};

Select.displayName = "Select";

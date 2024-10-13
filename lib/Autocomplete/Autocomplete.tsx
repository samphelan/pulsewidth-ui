import {
  ChangeEvent,
  ChangeEventHandler,
  ComponentProps,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./autocomplete.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "../TextInput/TextInput";
import useClickOutside from "../../hooks/useClickOutside";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";
import { ListItemButton } from "../ListItemButton/ListItemButton";

interface AutocompleteProps extends ComponentProps<"input"> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSelection?: (selection: string) => void;
  suggestions?: string[];
  inputClassName?: string;
  inputStyles?: CSSProperties;
  listClassName?: string;
  listStyles?: CSSProperties;
}

export const Autocomplete = ({
  suggestions,
  value,
  onChange,
  onSelection,
  inputClassName,
  inputStyles,
  listClassName,
  listStyles,
  ...rest
}: AutocompleteProps) => {
  const choices = suggestions || [];
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState(value);
  const [selected, setSelected] = useState<string>();
  const [showSuggestions, setShowSuggestions] = useState(false);

  useClickOutside(wrapperRef, () => {
    setShowSuggestions(false);
  });

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (selected) setSelected(undefined);
    const newValue = e.currentTarget.value;
    setText(newValue);
    setShowSuggestions(newValue ? true : false);
    onChange(e);
  };

  const handleCustomChange = (val: string) => {
    if (inputRef.current) {
      inputRef.current.value = val;

      const syntheticEvent = new Event("input", {
        bubbles: true,
      }) as unknown as React.ChangeEvent<HTMLInputElement>;

      const customEvent = {
        ...syntheticEvent,
        target: inputRef.current,
        currentTarget: inputRef.current,
      };
      onChange(customEvent as React.ChangeEvent<HTMLInputElement>);
      inputRef.current.focus();
    }
  };

  const handleDeleteSelection = () => {
    handleCustomChange("");
    setSelected(undefined);
  };

  const handleSuggestionClick = (choice: string) => {
    handleCustomChange(choice);
    setSelected(choice);
    setShowSuggestions(false);
    if (onSelection) {
      onSelection(choice);
    }
  };

  const handleFocus = () => {
    if (text && typeof selected === "undefined") setShowSuggestions(true);
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <TextInput
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        readOnly={selected ? true : false}
        style={inputStyles}
        className={[styles.input, inputClassName].join(" ")}
        onFocus={handleFocus}
        {...rest}
      />
      {showSuggestions && (
        <List
          className={[styles.ul, listClassName].join(" ")}
          style={listStyles}
        >
          {choices.map((choice, i) => (
            <ListItem key={`${choice}${i}`} className={styles.li}>
              <ListItemButton
                className={styles.choice}
                onClick={() => handleSuggestionClick(choice)}
              >
                {choice}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      {selected && (
        <div className={styles.xWrapper}>
          <Button className={styles.x} onClick={handleDeleteSelection}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
      )}
    </div>
  );
};

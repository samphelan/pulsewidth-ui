import {
  ChangeEvent,
  forwardRef,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import { TextInput } from "../TextInput/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./password.module.css";

interface PasswordProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Password = forwardRef(
  (
    { value, onChange }: PasswordProps,
    forwardedRef: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState("");

    const internalRef = useRef<HTMLInputElement>(null);

    const toggleVisibility = () => {
      setVisible((current) => !current);
      internalRef.current?.focus();
      setTimeout(() => {
        if (internalRef.current) {
          const { value } = internalRef.current;
          internalRef.current.setSelectionRange(value.length, value.length);
        }
      }, 0);
    };

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className={styles["wrapper"]}>
        <TextInput
          ref={(el) => {
            (internalRef as MutableRefObject<HTMLInputElement | null>).current =
              el;
            setRefs(el);
          }}
          className={styles["input"]}
          value={value || text}
          onChange={handleChange}
          type={visible ? "text" : "password"}
        />
        <button
          onClick={toggleVisibility}
          className={styles["visibility-button"]}
        >
          <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
        </button>
      </div>
    );
  }
);

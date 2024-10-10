import { ChangeEvent, useEffect, useState } from "react";
import { TextInput } from "../TextInput/TextInput";

type PhoneInputProps = {
  value?: string;
  onChange?: (v: string) => void;
};

export const Phone = ({ value, onChange }: PhoneInputProps) => {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [internalValue, setInternalValue] = useState<string>("");
  //const [countryValue, setCountryValue] = useState();

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    const newVal = val.replace(/\D/g, "");

    if (newVal.length <= 10) {
      setInternalValue(newVal);
      if (onChange) onChange(newVal);
    }
  };

  useEffect(() => {
    const val = value || internalValue;

    if (val.length === 0) setDisplayValue("");
    if (val.length > 0 && val.length < 4) setDisplayValue(val);
    if (val.length >= 4 && val.length < 7)
      setDisplayValue(`(${val.substring(0, 3)}) ${val.substring(3)}`);
    if (val.length >= 7)
      setDisplayValue(
        `(${val.substring(0, 3)}) ${val.substring(3, 6)}-${val.substring(6)}`
      );
  }, [value, internalValue]);

  return (
    <TextInput
      placeholder="(555) 555-5555"
      value={displayValue}
      onChange={handlePhoneChange}
    ></TextInput>
  );
};

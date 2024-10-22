import {
  Autocomplete,
  Checkbox,
  Flex,
  Option,
  Radio,
  Select,
  Variant,
} from "pulsewidth-ui";
import styles from "./landingPage.module.css";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import VariantPicker from "../../components/VariantPicker/VariantPicker";

const LandingPage = () => {
  const [radioChecked, setRadioChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selected, setSelected] = useState<string>();
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [autocompleteVal, setAutocompleteVal] = useState("");
  return (
    <Fragment>
      <Flex direction="row" className={styles.wrapper}>
        <h1>Playground</h1>
        <Radio
          label="Radio"
          checked={radioChecked}
          onChange={(e) => {
            setRadioChecked(e.currentTarget.checked);
          }}
        ></Radio>
        <Checkbox
          label="Checkbox"
          checked={checkboxChecked}
          onChange={(e) => {
            setCheckboxChecked(e.currentTarget.checked);
          }}
        ></Checkbox>
        <Select
          selected={selected}
          onChange={(v) => {
            setSelected(v);
          }}
          variant="outline"
          colorVariant="gray"
        >
          <Option value="option 1">Option 1</Option>
          <Option value="option 2">Option 2</Option>
        </Select>
        <Autocomplete
          value={autocompleteVal}
          onChange={(e) => {
            setAutocompleteVal(e.currentTarget.value);
          }}
          suggestions={["suggestion 1", "suggestion 2", "suggestion 3"]}
        />
        <Sandbox>
          <SandboxDisplay>
            {" "}
            <Checkbox
              label="Checkbox"
              checked={checkboxChecked}
              onChange={(e) => {
                setCheckboxChecked(e.currentTarget.checked);
              }}
            ></Checkbox>
          </SandboxDisplay>
          <SandboxControls>
            <h5>Variant</h5>
            <VariantPicker
              selected={selectedVariant}
              onChange={(v) => {
                setSelectedVariant(v);
              }}
            ></VariantPicker>
          </SandboxControls>
        </Sandbox>
      </Flex>
    </Fragment>
  );
};

export default LandingPage;

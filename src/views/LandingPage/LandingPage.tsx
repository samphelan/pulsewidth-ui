import {
  Autocomplete,
  Button,
  Checkbox,
  Drawer,
  Flex,
  Option,
  Radio,
  RadioGroup,
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
  const [radioChecked, setRadioChecked] = useState(0);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selected, setSelected] = useState<string>();
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [autocompleteVal, setAutocompleteVal] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Fragment>
      <Drawer
        onExit={() => {
          setDrawerOpen(false);
        }}
        open={drawerOpen}
      >
        Hey
      </Drawer>
      <Flex direction="row" className={styles.wrapper}>
        <h1>Playground</h1>
        <RadioGroup>
          <Radio
            label="Radio"
            checked={radioChecked === 1}
            onChange={(on) => {
              if (on) setRadioChecked(1);
            }}
          ></Radio>
          <Radio
            label="Radio2"
            checked={radioChecked === 2}
            onChange={(on) => {
              if (on) setRadioChecked(2);
            }}
          ></Radio>
          <Radio
            label="Radio3"
            checked={radioChecked === 3}
            onChange={(on) => {
              if (on) setRadioChecked(3);
            }}
          ></Radio>
        </RadioGroup>
        <Checkbox
          label="Checkbox"
          checked={checkboxChecked}
          onChange={(c) => {
            setCheckboxChecked(c);
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

        <Button
          onClick={() => {
            console.log("clicked");
            setDrawerOpen((prev) => !prev);
          }}
        >
          Click Me
        </Button>
        <Sandbox>
          <SandboxDisplay>
            {" "}
            <Checkbox
              label="Checkbox"
              checked={checkboxChecked}
              onChange={(c) => {
                setCheckboxChecked(c);
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

import { Checkbox, Flex, Option, Radio, Select } from "pulsewidth-ui";
import styles from "./landingPage.module.css";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

const LandingPage = () => {
  const [radioChecked, setRadioChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selected, setSelected] = useState<string>();
  return (
    <Fragment>
      <Flex direction="row" className={styles.wrapper}>
        <h2>Playground</h2>
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
      </Flex>
    </Fragment>
  );
};

export default LandingPage;

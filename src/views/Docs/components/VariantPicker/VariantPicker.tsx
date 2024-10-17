import { List, ListItem, Radio, RadioGroup } from "pulsewidth-ui";
import { Variant } from "../../../../../lib/types";

type VariantPickerProps = {
  selected: Variant;
  onChange: (v: Variant) => void;
};

const VariantPicker = ({ selected, onChange }: VariantPickerProps) => {
  return (
    <List direction={"row"}>
      <RadioGroup>
        {(["plain", "outline", "soft", "solid"] as Variant[]).map((v) => (
          <ListItem style={{ marginRight: "10px" }} key={v}>
            <Radio
              label={v}
              checked={selected === v}
              onChange={(e) => {
                if (e.currentTarget.value === "on") onChange(v);
              }}
              disableIcon
              variant="soft"
              colorVariant="blue"
            ></Radio>
          </ListItem>
        ))}
      </RadioGroup>
    </List>
  );
};

export default VariantPicker;
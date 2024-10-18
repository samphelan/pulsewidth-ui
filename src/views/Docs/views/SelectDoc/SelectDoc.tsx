import { Option, Select } from "pulsewidth-ui";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";
import { useState } from "react";
import { Colors, Variant } from "../../../../../lib/types";

const SelectDoc = () => {
  const [val, setVal] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");

  const code = () => {
    return `
      <Select variant={${selectedVariant}} colorVariant={${selectedColor}} />
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Select"
        description='Renders a component that extends the design and functionality of the html input[type="select"] tag'
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Select"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Select
              style={{ flex: "0" }}
              variant={selectedVariant}
              colorVariant={selectedColor}
              selected={val}
              onChange={(v) => {
                setVal(v);
              }}
            >
              <Option value="Option 1">Option 1</Option>
              <Option value="Option 2">Option 2</Option>
              <Option value="Option 3">Option 3</Option>
            </Select>
          </SandboxDisplay>
          <SandboxControls>
            <h5>Variant</h5>
            <VariantPicker
              selected={selectedVariant}
              onChange={(v) => {
                setSelectedVariant(v);
              }}
            ></VariantPicker>
            <h5>Color</h5>
            <ColorVariantPicker
              selected={selectedColor}
              onChange={(c) => {
                setSelectedColor(c);
              }}
            ></ColorVariantPicker>
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default SelectDoc;

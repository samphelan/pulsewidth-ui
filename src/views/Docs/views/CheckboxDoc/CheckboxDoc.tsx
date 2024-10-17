import { Checkbox } from "pulsewidth-ui";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import { useState } from "react";
import { Colors, Variant } from "../../../../../lib/types";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";

const CheckboxDoc = () => {
  const [checked, setChecked] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");
  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Checkbox"
        description='Renders a checkbox that extends the design and functionality of the html input[type="checkbox"] tag'
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Checkbox"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay>
            <Checkbox
              label="Label"
              variant={selectedVariant}
              colorVariant={selectedColor}
              checked={checked}
              onChange={(v) => {
                setChecked(v.currentTarget.checked);
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
            />
            <h5>Color</h5>
            <ColorVariantPicker
              selected={selectedColor}
              onChange={(c) => {
                setSelectedColor(c);
              }}
            />
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default CheckboxDoc;

import { Autocomplete } from "pulsewidth-ui";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import { useState } from "react";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import { Colors, Variant } from "../../../../../lib/types";
import NavFooter from "../../components/NavFooter/NavFooter";

const AutocompleteDoc = () => {
  const [val, setVal] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");

  const code = () => {
    return `
      <Autocomplete variant={${selectedVariant}} colorVariant={${selectedColor}} />
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Autocomplete"
        description="A text input that displays a list of autocomplete suggestions"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Autocomplete"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox className="mb8">
          <SandboxDisplay code={code()}>
            <Autocomplete
              value={val}
              onChange={(e) => {
                setVal(e.currentTarget.value);
              }}
              suggestions={["Suggestion 1", "Suggestion 2"]}
              variant={selectedVariant}
              colorVariant={selectedColor}
            ></Autocomplete>
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
        <NavFooter nextPath="/docs/Installation" nextTitle="Installation" />
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default AutocompleteDoc;

import ComponentBody from "../../components/ComponentBody/ComponentBody";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import { useState } from "react";
import {
  Colors,
  Flex,
  Radio,
  RadioGroup,
  Radius,
  Slider,
  Variant,
  Calendar,
  SelectionMode,
} from "pulsewidth-ui";

const CalendarDoc = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("solid");
  const [selectedColor, setSelectedColor] = useState<Colors>("green");
  const [roundness, setRoundness] = useState<Radius>(3);
  const [selectionMode, setSelectionMode] = useState<SelectionMode>("single");

  const code = () => {
    return `
<Calendar
    variant="${selectedVariant}"
    colorVariant="${selectedColor}"
    radius={${roundness}}
    selectionMode="${selectionMode}"
/>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Calendar"
        description="A calendar component that can be used to select a single date, multiple dates, or a range of dates"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Calendar"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Calendar
              className="mb5"
              variant={selectedVariant}
              colorVariant={selectedColor}
              radius={roundness}
              selectionMode={selectionMode}
            ></Calendar>
          </SandboxDisplay>
          <SandboxControls>
            <h5>Variant</h5>
            <VariantPicker
              selected={selectedVariant}
              onChange={(v) => {
                setSelectedVariant(v);
              }}
            ></VariantPicker>
            <h5 className="mt3">Color</h5>
            <ColorVariantPicker
              selected={selectedColor}
              onChange={(c) => {
                setSelectedColor(c);
              }}
            ></ColorVariantPicker>
            <h5 className="mt3">Roundness</h5>
            <Slider
              value={roundness}
              onChange={(n) => {
                setRoundness(n as Radius);
              }}
              min={0}
              max={9}
            />
            <h5 className="mt3">Selection Mode</h5>
            <Flex>
              <RadioGroup name="Selection Mode">
                {(["single", "multiple", "range"] as SelectionMode[]).map(
                  (mode) => (
                    <Radio
                      key={mode}
                      value={mode}
                      label={mode}
                      disableIcon
                      className="mr3"
                      checked={selectionMode === mode}
                      onChange={(on) => {
                        if (on) setSelectionMode(mode);
                      }}
                    />
                  )
                )}
              </RadioGroup>
            </Flex>
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default CalendarDoc;

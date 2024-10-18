import {
  Flex,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Tooltip,
} from "pulsewidth-ui";
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
import { Colors, Position, Variant } from "../../../../../lib/types";

const TooltipDoc = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("solid");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");
  const [labelPosition, setLabelPosition] = useState<Position>("top");

  const code = () => {
    return `
      <Tooltip variant={${selectedVariant}} colorVariant={${selectedColor}} />
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Tooltip"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Tooltip"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Flex>
              <Tooltip
                text="Tooltip"
                colorVariant={selectedColor}
                variant={selectedVariant}
                position={labelPosition}
              >
                <div>Hover Over Me</div>
              </Tooltip>
            </Flex>
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
            <h5>Position</h5>
            <List direction="row">
              <RadioGroup name={"labelposition"}>
                {(["top", "right", "bottom", "left"] as Position[]).map(
                  (pos) => (
                    <ListItem key={pos} style={{ marginRight: "10px" }}>
                      <Radio
                        label={pos}
                        checked={labelPosition === pos}
                        onChange={(e) => {
                          if (e.currentTarget.checked) setLabelPosition(pos);
                        }}
                        disableIcon
                        variant="soft"
                        colorVariant="blue"
                      ></Radio>
                    </ListItem>
                  )
                )}
              </RadioGroup>
            </List>
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default TooltipDoc;

import { Button, Drawer, Flex, Radio, RadioGroup } from "pulsewidth-ui";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import { useState } from "react";
import { Colors, Variant } from "pulsewidth-ui";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";

const DrawerDoc = () => {
  const [open, setOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");
  const [position, setPosition] = useState<"top" | "right" | "bottom" | "left">(
    "left"
  );

  const code = () => {
    return `
<Drawer 
  variant={${selectedVariant}} 
  colorVariant={${selectedColor}}
  open={${open}}
  anchor={${position}}
/>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Drawer"
        description="Renders a fixed position drawer that opens from a side of the screen and often serves as a navigation menu on smaller screens and mobile devices"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Drawer"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Drawer
              onExit={() => {
                setOpen(false);
              }}
              open={open}
              variant={selectedVariant}
              colorVariant={selectedColor}
              anchor={position}
            >
              <div style={{ padding: "20px" }}>
                <h2>Drawer Content Goes Here</h2>
                <p>Click outside the drawer to exit.</p>
              </div>
            </Drawer>
            <Button
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              variant="outline"
            >
              Open Drawer
            </Button>
          </SandboxDisplay>
          <SandboxControls>
            <h5>Variant</h5>
            <VariantPicker
              selected={selectedVariant}
              onChange={(v) => {
                setSelectedVariant(v);
              }}
            />
            <h5 className="mt3">Color</h5>
            <ColorVariantPicker
              selected={selectedColor}
              onChange={(c) => {
                setSelectedColor(c);
              }}
            />
            <h5 className="mt3">Anchor Position</h5>
            <Flex direction="row">
              <RadioGroup>
                {(["top", "right", "bottom", "left"] as const).map((pos) => (
                  <Radio
                    key={pos}
                    label={pos}
                    disableIcon
                    variant={"soft"}
                    colorVariant="blue"
                    style={{ marginRight: "10px" }}
                    checked={position === pos}
                    onChange={(checked) => {
                      if (checked) setPosition(pos);
                    }}
                  />
                ))}
              </RadioGroup>
            </Flex>
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default DrawerDoc;

import { Button, Modal, Radius, Slider } from "pulsewidth-ui";
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

const ModalDoc = () => {
  const [open, setOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");
  const [radius, setRadius] = useState<Radius>(3);

  const code = () => {
    return `
<Modal 
  variant="${selectedVariant}"
  colorVariant="${selectedColor}"
  radius={${radius}}
  open={${open}}
>
  <div style={{ padding: "20px" }}>
    <h2>Modal Content Goes Here</h2>
    <p>Click outside the modal to exit.</p>
  </div>
</Modal>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Modal"
        description="Renders a fixed position pop-up window (modal)"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Modal"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Modal
              onExit={() => {
                setOpen(false);
              }}
              open={open}
              variant={selectedVariant}
              colorVariant={selectedColor}
              radius={radius}
            >
              <div style={{ padding: "20px" }}>
                <h2>Modal Content Goes Here</h2>
                <p>Click outside the modal to exit.</p>
              </div>
            </Modal>
            <Button
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              variant="outline"
            >
              Open Modal
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
            <h5 className="mt3">Radius</h5>
            <Slider
              value={radius}
              onChange={(n) => {
                setRadius(n as Radius);
              }}
              max={9}
              min={0}
            ></Slider>
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default ModalDoc;

import {
  Button,
  Drawer,
  Flex,
  List,
  ListItem,
  ListItemButton,
  Radio,
  RadioGroup,
  Radius,
  Slider,
} from "pulsewidth-ui";
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
import { Dropdown } from "../../../../../lib/Dropdown/Dropdown";
import { DropdownButton } from "../../../../../lib/DropdownButton/DropdownButton";
import { DropdownContent } from "../../../../../lib/DropdownContent/DropdownContent";

const DropdownDoc = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");
  const [position, setPosition] = useState<"top" | "right" | "bottom" | "left">(
    "left"
  );
  const [radius, setRadius] = useState<Radius>(3);

  const code = () => {
    return `
<Dropdown
  variant="${selectedVariant}"
  colorVariant="${selectedColor}"
  radius={${radius}}
>
  <DropdownButton>Open Menu</DropdownButton>
  <DropdownContent>
    <List
      variant="${selectedVariant}"
      colorVariant="${selectedColor}"
      opaque
      radius={${radius}}
    >
      <ListItem>
        <ListItemButton>Nav Link 1</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>Nav Link 2</ListItemButton>
      </ListItem>
    </List>
  </DropdownContent>
</Dropdown>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Dropdown"
        description="A button that exposes a dropdown menu when clicked"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Dropdown"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Dropdown
              variant={selectedVariant}
              colorVariant={selectedColor}
              radius={radius}
            >
              <DropdownButton>Open Menu</DropdownButton>
              <DropdownContent>
                <List
                  variant={selectedVariant}
                  colorVariant={selectedColor}
                  opaque
                  radius={radius}
                >
                  <ListItem>
                    <ListItemButton>Nav Link 1</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Nav Link 2</ListItemButton>
                  </ListItem>
                </List>
              </DropdownContent>
            </Dropdown>
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
              onChange={(v) => setRadius(v as Radius)}
              min={0}
              max={9}
            />
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default DropdownDoc;

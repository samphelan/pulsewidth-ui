import { Button, Flex } from "pulsewidth-ui";
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
import NavFooter from "../../components/NavFooter/NavFooter";

const FlexDoc = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("plain");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");

  const code = () => {
    return `
      <Flex variant={${selectedVariant}} colorVariant={${selectedColor}}>
        <Button>Flex Item 1</Button>
        <Button>Flex Item 2</Button>
        <Button>Flex Item 3</Button>
      </Flex>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Flex"
        description="Renders an element with display: flex and props that control the most commonly-used flex styling properties. 
            When used directly, it renders a div (which can be overridden), and it is also used as the root element for semantic 
            components such as Nav, Section, Header, and Footer"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Flex"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Flex>
              <Button>Flex Item 1</Button>
              <Button>Flex Item 2</Button>
              <Button>Flex Item 3</Button>
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
          </SandboxControls>
        </Sandbox>
        <NavFooter
          className="mt7"
          previousPath="/docs/TextInput"
          previousTitle="TextInput"
          nextPath="/docs/List"
          nextTitle="List"
        />
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default FlexDoc;

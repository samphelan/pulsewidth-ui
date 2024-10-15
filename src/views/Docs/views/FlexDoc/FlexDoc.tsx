import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";

const FlexDoc = () => {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Flex"
        description="Renders an element with display: flex and props that control the most commonly-used flex styling properties. 
            When used directly, it renders a div (which can be overridden), and it is also used as the root element for semantic 
            components such as Nav, Section, Header, and Footer"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Flex"
      ></ComponentHeader>
    </ComponentPageLayout>
  );
};

export default FlexDoc;

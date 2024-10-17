import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Accordion, AccordionProps } from "./Accordion";
import { AccordionHeader } from "../AccordionHeader/AccordionHeader";
import { RefAttributes } from "react";
import { AccordionContent } from "../AccordionContent/AccordionContent";
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";
import { ListItemButton } from "../ListItemButton/ListItemButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  subcomponents: {
    AccordionHeader: AccordionHeader as unknown as React.ComponentType<any>,
    AccordionContent: AccordionContent as unknown as React.ComponentType<any>,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OneItem: Story = {
  render: (args: AccordionProps & RefAttributes<HTMLDivElement>) => (
    <Accordion
      {...args}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "stretch",
      }}
    >
      <AccordionHeader>Header</AccordionHeader>
      <AccordionContent>
        <List>
          <ListItem>
            <ListItemButton>Item 1</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Item 2</ListItemButton>
          </ListItem>
        </List>
      </AccordionContent>
    </Accordion>
  ),
};

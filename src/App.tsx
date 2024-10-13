import { ChangeEvent, useState } from "react";
import "./App.css";
import {
  Accordion,
  AccordionHeader,
  AccordionContent,
  Autocomplete,
  Avatar,
  Button,
  Checkbox,
  Option,
  Password,
  Phone,
  Radio,
  Select,
  Slider,
  TextInput,
  List,
  ListItem,
  ListItemButton,
  Flex,
} from "pulsewidth-ui";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectedValue, setSelectedValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(50);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div className="app">
        <Flex>
          <Flex direction="column">
            <Accordion>
              <AccordionHeader>Getting Started</AccordionHeader>
              <AccordionContent>
                <List>
                  {["Overview", "Installation"].map((page) => (
                    <ListItem key={page}>
                      <ListItemButton>{page}</ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionContent>
            </Accordion>
            <Accordion>
              <AccordionHeader>Components</AccordionHeader>
              <AccordionContent>
                <List style={{ paddingLeft: "24px" }}>
                  {["Autocorrect", "Slider", "TextInput"].map((comp) => (
                    <ListItem key={comp}>
                      <ListItemButton
                        style={{ borderLeft: "2px solid rgb(220,220,220)" }}
                      >
                        {comp}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionContent>
            </Accordion>
          </Flex>
        </Flex>
        <div className={"miniwrapper"}>
          <Button>Click Me</Button>
        </div>
        <div className={"miniwrapper"}>
          <TextInput placeholder="Regular Input" />
        </div>

        <div className={"miniwrapper"}>
          <Autocomplete
            value={inputVal}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              console.log(e);
              setInputVal(e.currentTarget.value);
            }}
            suggestions={["Choice 1", "Choice 2", "Choice 3"]}
            placeholder="Autocomplete"
          />
        </div>
        <div className={"miniwrapper"}>
          <Checkbox label="this is a checkbox" variant="square" size="medium" />
        </div>
        <div className={"miniwrapper"}>
          <Radio
            name="options"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleRadioChange}
            label="Option 1"
          />
          <Radio
            name="options"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleRadioChange}
            label="Option 2"
            size="medium"
          />{" "}
        </div>
        <div className={"miniwrapper"}>
          <Select>
            <Option value="option 1">Option 1</Option>
            <Option value="option 2">Option 2</Option>
            <Option value="option 3">Option 3</Option>
          </Select>
        </div>
        <div className={"miniwrapper"}>
          <Password />
        </div>
        <div className={"miniwrapper"}>
          <Phone />
        </div>
        <div className={"miniwrapper"}>
          <Slider
            min={0}
            max={10}
            step={1}
            value={sliderValue}
            onChange={setSliderValue}
          />
        </div>
        <div className={"miniwrapper"}>
          <Avatar text="SP" />
        </div>
        <List>
          <ListItem>List Item 1</ListItem>
          <ListItem>List Item 2</ListItem>
          <ListItem>
            <ListItemButton>List Item 3 (button)</ListItemButton>
          </ListItem>
        </List>
        <div className={"miniwrapper"}>
          <Accordion>
            <AccordionHeader>Title</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </Accordion>
          <Accordion>
            <AccordionHeader>Title</AccordionHeader>
            <AccordionContent>Content</AccordionContent>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default App;

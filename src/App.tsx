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
  List,
  ListItem,
  ListItemButton,
  Option,
  Password,
  Phone,
  Radio,
  Select,
  Slider,
  TextInput,
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
        <Button>Hey</Button>
      </div>
    </>
  );
}

export default App;

import { ChangeEvent, useState } from "react";
import "./App.css";
import {
  Autocomplete,
  Button,
  Checkbox,
  Radio,
  TextInput,
} from "pulsewidth-ui";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div>
        <Button>Click Me</Button>
        <TextInput />
        <Autocomplete
          value={inputVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            console.log(e);
            setInputVal(e.currentTarget.value);
          }}
          suggestions={["Choice 1", "Choice 2", "Choice 3"]}
        />
        <Checkbox label="this is a checkbox" variant="circle" />
        <Radio
          name="options"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
          label="Option 1"
          size="large"
        />
        <Radio
          name="options"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
          label="Option 2"
          size="medium"
        />
      </div>
    </>
  );
}

export default App;

import { ChangeEvent, useState } from "react";
import "./App.css";
import { Autocomplete, Button, Checkbox, TextInput } from "pulsewidth-ui";

function App() {
  const [inputVal, setInputVal] = useState("");
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
      </div>
    </>
  );
}

export default App;

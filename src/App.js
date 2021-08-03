import "./App.css";
import { useState } from "react";
import CalculatorContext from "./context/calculatorContext";
import Screen from "./elements/screen";
import AC from "./elements/ac";
import CE from "./elements/ce";
import Operation from "./elements/operation";
import Digit from "./elements/digit";
import Equals from "./elements/equals";

function App() {
  const [value, setValue] = useState("aaaaaaaaaaaaaaabbbbbbbbbbBBBBBBBBBBBBBB");

  const emptyScreen = () => {
    setValue("0");
  };

  return (
    <CalculatorContext.Provider value={{ emptyScreen }}>
      <div className="wrapper">
        <Screen value={value} />
        <AC /> <CE /> <Operation text="/" />
        <Digit text="7" /> <Digit text="8" /> <Digit text="9" />
        <Operation text="x" />
        <Digit text="4" /> <Digit text="5" /> <Digit text="6" />
        <Operation text="-" />
        <Digit text="1" /> <Digit text="2" /> <Digit text="3" />
        <Operation text="+" />
        <Digit text="0" /> <Digit text="." /> <Digit text="ANS" />
        <Equals />
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;

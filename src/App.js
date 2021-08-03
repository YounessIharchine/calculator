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

  const removeLastChar = () => {
    setValue((prevValue) => {
      const value = prevValue.slice(0, -1);
      if (!value) return "0";
      return value;
    });
  };

  const addDigit = (digit) => {
    setValue((prevValue) => {
      if (value === "0") return digit;
      return prevValue + digit;
    });
  };

  return (
    <CalculatorContext.Provider
      value={{ emptyScreen, removeLastChar, addDigit }}
    >
      <div className="wrapper">
        <Screen value={value} />
        <AC /> <CE /> <Operation operation="/" />
        <Digit digit="7" /> <Digit digit="8" /> <Digit digit="9" />
        <Operation operation="x" />
        <Digit digit="4" /> <Digit digit="5" /> <Digit digit="6" />
        <Operation operation="-" />
        <Digit digit="1" /> <Digit digit="2" /> <Digit digit="3" />
        <Operation operation="+" />
        <Digit digit="0" /> <Digit digit="." />
        <Equals />
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;

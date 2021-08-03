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
    const operations = ["+", "-", "x", "/"];
    setValue((prevValue) => {
      if (prevValue === "0") return digit;
      if (operations.includes(prevValue[prevValue.length - 2]) && digit === "0")
        return prevValue;
      if (
        operations.includes(prevValue[prevValue.length - 2]) &&
        prevValue[prevValue.length - 1] === "0"
      )
        return prevValue.slice(0, -1) + digit;
      return prevValue + digit;
    });
  };

  const addOperation = (operation) => {
    const operations = ["+", "-", "x", "/"];

    setValue((prevValue) => {
      if (prevValue === "0" && operation === "-") return operation;
      if (prevValue === "-" && operation === "+") return "0";
      if (prevValue === "0" || prevValue === "-") return prevValue;

      const lastChar = prevValue[prevValue.length - 1];
      if (
        operations.some((iteratedOperation) => iteratedOperation === lastChar)
      )
        return prevValue.slice(0, -1) + operation;

      return prevValue + operation;
    });
  };

  return (
    <CalculatorContext.Provider
      value={{ emptyScreen, removeLastChar, addDigit, addOperation }}
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

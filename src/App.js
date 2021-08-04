import "./App.css";
import { useState } from "react";
import CalculatorContext from "./context/calculatorContext";
import Screen from "./elements/screen";
import AC from "./elements/ac";
import CE from "./elements/ce";
import Operation from "./elements/operation";
import Digit from "./elements/digit";
import Point from "./elements/point";
import Equals from "./elements/equals";

function App() {
  const [value, setValue] = useState("0");
  const operations = ["+", "-", "x", "/"];

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
      if (prevValue === "0") return digit;

      const lastChar = prevValue[prevValue.length - 1];
      const beforeLastChar = prevValue[prevValue.length - 2];

      //when a 0 is after an operation
      if (operations.includes(beforeLastChar) && lastChar === "0") {
        if (digit === "0") return prevValue;
        else return prevValue.slice(0, -1) + digit;
      }

      return prevValue + digit;
    });
  };

  const addPoint = () => {
    setValue((prevValue) => {
      const lastChar = prevValue[prevValue.length - 1];

      if (lastChar === "0") return prevValue + ".";
      if (
        operations.some((iteratedOperation) => iteratedOperation === lastChar)
      )
        return prevValue + "0.";
      if (
        prevValue.split(".").length - 1 === 1 &&
        !operations.some((iteratedOperation) =>
          prevValue.includes(iteratedOperation)
        )
      )
        return prevValue;

      if (
        prevValue.split(".").length - 1 === 2 &&
        operations.some((iteratedOperation) =>
          prevValue.includes(iteratedOperation)
        )
      )
        return prevValue;

      return prevValue + ".";
    });
  };

  const addOperation = (operation) => {
    const operations = ["+", "-", "x", "/"];

    setValue((prevValue) => {
      if (prevValue === "0" && operation === "-") return operation;
      if (prevValue === "-" && operation === "+") return "0";
      if (prevValue === "0" || prevValue === "-") return prevValue;

      const lastChar = prevValue[prevValue.length - 1];

      if (lastChar === ".") return prevValue.slice(0, -1) + operation;

      if (
        operations.some((iteratedOperation) => iteratedOperation === lastChar)
      )
        return prevValue.slice(0, -1) + operation;

      if (
        operations.some((iteratedOperation) =>
          prevValue.includes(iteratedOperation)
        )
      )
        return calculate(prevValue) + operation;

      return prevValue + operation;
    });
  };

  const equals = () => {
    const operations = ["+", "-", "x", "/"];

    setValue((prevValue) => {
      const lastChar = prevValue[prevValue.length - 1];
      if (
        operations.some((iteratedOperation) => iteratedOperation === lastChar)
      )
        return prevValue;

      return calculate(prevValue);
    });
  };

  const calculate = (prevValue) => {
    return eval(prevValue.replace("x", "*")).toString();
  };

  return (
    <CalculatorContext.Provider
      value={{
        emptyScreen,
        removeLastChar,
        addDigit,
        addPoint,
        addOperation,
        equals,
      }}
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
        <Digit digit="0" /> <Point />
        <Equals />
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;

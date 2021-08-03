import { useContext } from "react";
import CalculatorContext from "../context/calculatorContext";

const CE = () => {
  const { removeLastChar } = useContext(CalculatorContext);

  return (
    <div className="button" onClick={removeLastChar}>
      CE
    </div>
  );
};
export default CE;

import { useContext } from "react";
import CalculatorContext from "../context/calculatorContext";

const Operation = ({ operation }) => {
  const { addOperation } = useContext(CalculatorContext);

  return (
    <div className="button" onClick={() => addOperation(operation)}>
      {operation}
    </div>
  );
};
export default Operation;

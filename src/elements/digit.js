import { useContext } from "react";
import CalculatorContext from "../context/calculatorContext";

const Digit = ({ digit }) => {
  const { addDigit } = useContext(CalculatorContext);

  return (
    <div className="button" onClick={() => addDigit(digit)}>
      {digit}
    </div>
  );
};
export default Digit;

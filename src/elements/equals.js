import { useContext } from "react";
import CalculatorContext from "../context/calculatorContext";

const Equals = () => {
  const { equals } = useContext(CalculatorContext);

  return (
    <div className="button equals" onClick={equals}>
      =
    </div>
  );
};
export default Equals;
